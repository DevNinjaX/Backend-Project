// Importing necessary modules
import express from 'express'; // Importing the Express library for creating a web server
import cors from 'cors'; // Importing the CORS middleware for enabling Cross-Origin Resource Sharing
import cookieParser from 'cookie-parser'; // Importing the cookie-parser middleware for parsing cookies

// Creating an instance of an Express application
const app = express();

// Enabling CORS with specific options
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from the specified origin (read from environment variables)
    credentials: true // Allow credentials (cookies, authorization headers, etc.) to be sent in cross-origin requests
}));

// Parsing incoming JSON requests and limiting the size to 16kb
app.use(express.json({ limit: '16kb' }));

// Parsing incoming URL-encoded requests and limiting the size to 16kb
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// Serving static files from the "Public" directory
app.use(express.static('Public'));

// Parsing cookies attached to client requests
app.use(cookieParser());

// Exporting the Express app instance
export { app };

/*
Detailed Explanation and Use Cases:
Importing Modules:

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

express: A web framework for Node.js used to build web applications and APIs.
cors: Middleware to enable Cross-Origin Resource Sharing, allowing the server to handle requests from different origins.
cookieParser: Middleware to parse cookies attached to client requests.
Creating an Express Application Instance:


const app = express();

app: This is the main Express application instance that handles incoming requests and routes them to the appropriate handlers.
Enabling CORS:


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

cors(): Configures the CORS middleware.
origin: Specifies the allowed origin for cross-origin requests. The value is read from the CORS_ORIGIN environment variable.
credentials: Indicates whether the response to the request can be exposed when the credentials flag is true. Allows cookies and authorization headers to be sent in cross-origin requests.
Parsing JSON Requests:


app.use(express.json({ limit: '16kb' }));

express.json(): Middleware that parses incoming requests with JSON payloads.
limit: Restricts the size of JSON payloads to 16kb to prevent denial of service (DoS) attacks by sending large payloads.
Parsing URL-Encoded Requests:


app.use(express.urlencoded({ extended: true, limit: '16kb' }));

express.urlencoded(): Middleware that parses incoming requests with URL-encoded payloads.
extended: true: Uses the qs library to parse the URL-encoded data, allowing for rich objects and arrays.
limit: Restricts the size of URL-encoded payloads to 16kb for security reasons.
Serving Static Files:


app.use(express.static('Public'));

express.static(): Middleware that serves static files (like HTML, CSS, JS, images) from the specified directory.
'Public': Directory from which static files will be served. When a request matches a file in this directory, it is served directly without further processing.
Parsing Cookies:


app.use(cookieParser());

cookieParser(): Middleware that parses cookies attached to client requests and populates req.cookies with an object keyed by the cookie names. Useful for handling session cookies and other data stored in cookies.


Exporting the App Instance:
export { app };

export { app }: Exports the Express app instance so that it can be imported and used in other parts of the application, such as the server entry point or test files.

Summary:
Express: Creates and configures the web server.
CORS: Enables cross-origin requests from specific origins and allows credentials.
express.json(): Parses JSON request bodies with a size limit.
express.urlencoded(): Parses URL-encoded request bodies with a size limit.
express.static(): Serves static files from a specified directory.
cookieParser(): Parses cookies from incoming requests.
Exporting: Makes the configured Express app available for import in other files.
By using these middlewares, the application is set up to handle JSON and URL-encoded data, serve static files, parse cookies, and allow secure cross-origin requests, providing a robust foundation for a web application.
 */