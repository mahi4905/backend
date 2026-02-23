
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


export const connectToDatabase = async () => {
  try {
    const connectedurl=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`Connected to MongoDB successfully:connectedurl:${connectedurl.connection.host }`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);//bydefault avaliable in node
  }
};
export default connectToDatabase;