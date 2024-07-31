/* Second approach to connect Database */

import mongoose from "mongoose";
import { DB_NAME } from "../constraints.js";

const connectDB = async ()=> {
    try {

        const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MONGODB connected!!! DB HOST: ${conn.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}

export default connectDB;
