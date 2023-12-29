// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://shashankchauhan:raja9528@cluster0.nkaqgrt.mongodb.net/gofoodmern?retryWrites=true&w=majority';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected successfully");

//         // const fetchedData = await mongoose.connection.db.collection("food_items");
//         // const data = await fetchedData.find({}).toArray();
        
//         // const foodCategory = await mongoose.connection.db.collection("foodCategory");
//         // const catData = await foodCategory.find({}).toArray();


//         //   global.food_items = data;
//         //   global.foodCategory = catData;

//     } catch (err) {
//         console.error("Error connecting to MongoDB:");
//     }
// };

// module.exports = mongoDB;


const mongoose  = require("mongoose");

// var mongoURL = "mongodb+srv://shashankchauhan:raja9528@cluster0.nkaqgrt.mongodb.net/gofoodmern?retryWrites=true&w=majority" ;
var mongoURL="mongodb+srv://shashankchauhan:raja9528@cluster0.nkaqgrt.mongodb.net/gofoodmern?retryWrites=true&w=majority" ;

mongoose.connect(mongoURL, {useNewUrlParser: true,useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection ;

db.on('connected' , async()=> {
    console.log("MongoDB connected successfully");

     const fetchedData = await mongoose.connection.db.collection("food_items");
        const data = await fetchedData.find({}).toArray();
        // console.log(data)
         global.food_items = data
         const foodcat = await mongoose.connection.db.collection("foodCategory");
        const catData = await fetchedData.find({}).toArray();
        // console.log(data)
         global.foodCategory = catData
})

db.on('error' , ()=> {
    console.log("MongoDB connection failed");
})

module.exports = mongoose