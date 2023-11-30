// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://shashankchauhan:raja9528@cluster0.nkaqgrt.mongodb.net/gofoodmern?retryWrites=true&w=majority'


// const mongoDB = ()=>{


//  mongoose.connect(mongoURI,()=>{
//     console.log("connect succesfully")
    
// });
// }
// // module.exports = mongoDB;

// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://shashankchauhan:raja9528@cluster0.nkaqgrt.mongodb.net/gofoodmern?retryWrites=true&w=majority';

// const mongoDB = () => {
//     mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//             console.log("Connected successfully");

//             const fetched data  = await mongoose.connection.db.collection("food_items");
//             fetched_data.find({})
//         })
//         .catch((err) => {
//             console.error("Error connecting to MongoDB:", err);
//         });
// };

// module.exports = mongoDB

const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://shashankchauhan:raja9528@cluster0.nkaqgrt.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected successfully");

        const fetchedData = await mongoose.connection.db.collection("food_items");
        const data = await fetchedData.find({}).toArray();
        
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();


          global.food_items = data;
          global.foodCategory = catData;

    } catch (err) {
        console.error("Error connecting to MongoDB:");
    }
};

module.exports = mongoDB;
