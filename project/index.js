const express = require('express')
const app = express();
const cors = require('cors');

const port = 5000

const mongoDB = require("./Db")

app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
       "Access-Control-Allow-Headers",
        "origin, X-Resquested-With, Content-Type,Accept"
    );
    next();
})

app.get('/', (req, res) =>{
    res.send('Hello World')
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/LoginUser"));

app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.use('/api', require("./Routes/MyOrderData.js"));





app.listen(port, ()=>{
    console.log(`server is running port ${port}`);
}
)