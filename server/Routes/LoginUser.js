
const express = require("express");
const router = express.Router();

const User = require("../models/User");

const jwt = require("jsonwebtoken");

const {
   body,
   validationResult
} = require("express-validator");

const bcrypt = require("bcryptjs");

const jwtSecret = "Mynameisraja ";




router.post(
    "/loginuser",
    [
       body("email").isEmail(),
 
       body("password", "weak").isLength({
          min: 5,
       }),
    ],
    async (req, res) => {
       let email = req.body.email;
 
       try {
          let userData = await User.findOne({
             email,
          });
          if (!userData) {
             return res.status(400).json({
                errors: "try logging with correct credintials",
             });
          }
          const pwtCompare = await bcrypt.compare(req.body.password,userData.password)
          if (!pwtCompare) {
             return res.status(400).json({
                errors: "try logging with correct credintials",
             });
          };
         
          const data = {
             user: {
                id: userData.id
             }
          };
          
 
            const authToken = jwt.sign(data,jwtSecret)
          return res.json({
             success: true, authToken:authToken
          });
       } catch (error) {
          console.log(error);
          res.json({
             success: false,
          });
       }
    }
 );
 
 module.exports = router;
 
 
 
 
 