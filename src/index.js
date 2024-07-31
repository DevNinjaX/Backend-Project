// require('dotenv').config({path: './env'})

/* Second approach to connect Database */
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import {app} from "./app.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then( () => {
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
    
})
.catch((err) => {
    console.error("MongoDB connection failed!!!");
})


/* First approach to connect Database *//*

// Importing the Mongoose library to interact with MongoDB
import mongoose from "mongoose";

// Importing the DB_NAME constant from the constants.js file
import { DB_NAME } from "./constranits.js";

// Importing the dotenv library to manage environment variables
import dotenv from "dotenv";

// Importing the Express framework to create a web application
import express from "express";
const app = express(); // Initializing an instance of the Express application

// Loading environment variables from a .env file into process.env
dotenv.config();

// async: This keyword defines an asynchronous function, which allows the use of `await` within the function.

// IIFE: An Immediately Invoked Function Expression is a function that runs as soon as it is defined. The `;` before `async` ensures the IIFE is not treated as a continuation of the previous statement.

// Immediately Invoked Async Function Expression (IIFE) to handle asynchronous code
;(async () => {
    try {
        // Connecting to the MongoDB database using Mongoose and the environment variable for the URL and database name
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        // Handling errors for the Express application
        app.on("error", (error) => {
            console.log("ERROR: ", error); // Logging the error to the console
            throw error; // Throwing the error to stop the execution if there's an error with the Express app
        });

        // Starting the Express application to listen on the port defined in the environment variable
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`); // Logging that the app is running and listening on the specified port
        });

    } catch (error) {
        console.log("ERROR: ", error); // Logging any errors that occur during the connection to MongoDB or starting the server
        throw error; // Throwing the error to stop execution if an error occurs during the try block
    }
})();

*/