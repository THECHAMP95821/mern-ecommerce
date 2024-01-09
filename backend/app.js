const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();
const cors=require('cors');
const bodyParser=require("body-parser");
const fileUpload=require("express-fileupload")
const dotenv=require("dotenv");
dotenv.config({ path: "backend/config/config.env"});
const errorMiddleware=require('./middleware/error');
const path=require("path");

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb',extended: true}));
app.use(fileUpload());

//route imports
const product=require("./routes/productRoute");
const user=require("./routes/userRoute");
const order=require("./routes/orderRoutes");
const payment=require("./routes/paymentRoute");


app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);
// app.use(express.static(path.join(__dirname,"../frontend/build")));

// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
// })

//middleware for error
app.use(errorMiddleware);

module.exports=app;