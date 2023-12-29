const mongoose = require("mongoose");

const fooditemSchema = mongoose.Schema({
    id : {type: Number , require} ,
    name : {type: String , require} ,
    image : {type: String , require}  ,
    categoryName: {type: String , require} ,
    // label: {type: String , require}  ,
    price:  {type: Number , require} ,
    description:{type: String , require},
    // comments: []   
},
{
    timestamps: true,
})

const dishModel = mongoose.model("fooditem",fooditemSchema);
 
module.exports = dishModel;