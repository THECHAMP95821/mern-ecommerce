const app=require("./app");

const dotenv=require("dotenv");
const cloudinary=require("cloudinary")

//config
dotenv.config({ path: "backend/config/config.env"});
const connectDatabase=require("./config/database");

//HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException",(err)=>{
    console.log(`ERROR : ${err.message}`);
    console.log("shutting down server due to uncaughtException");
    server.close(()=>{
        process.exit();
    });
})

console.log(process.env.PORT,process.env.DB_URL);


const server=app.listen(process.env.PORT,()=>{
    console.log(`SERVER WORKING ON ${process.env.PORT}`)
})

//connect db
connectDatabase();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

//UNHANDLED PROMISE REJECTION
process.on("unhandledRejection",(err)=>{
    console.log(`ERROR : ${err.message}`);
    console.log("shutting down server due to unhandled promise rejection");
    server.close(()=>{
        process.exit();
    });
})