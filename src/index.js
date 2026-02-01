import dotenv from 'dotenv'

dotenv.config({ path: './.env' })


import connectToDatabase from "./db/index.js";

connectToDatabase();












/*//do not pollute the index file
import express from "express";
const app=express();

(async()=>{
    try {
         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
         app.on("error", (error) => {
            console.error("Error starting the server:", error);
            process.exit(1);
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
         console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        
    }   

})();
*/