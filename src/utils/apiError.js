// A custom error class that extends the built-in Error class in JavaScript. This allows it to inherit properties and methods from the Error class.
class apiError extends Error {
    // The constructor method for initializing an instance of the apiError class
    constructor(
        statuscode, // Status code for the error (e.g., 404, 500)
        message = "Something went wrong", // Default error message if none is provided
        errors = [], // Default to an empty array for additional error details
        stack = "" // Default to an empty string for the stack trace
    ){
        // Call the parent class (Error) constructor with the message parameter
        super(message);
        
        // Assign properties to the apiError instance
        this.statuscode = statuscode; // The HTTP status code for the error
        this.data = null; // Placeholder for any additional data related to the error
        this.message = message; // The error message
        this.success = false; // Indicates that the operation was not successful
        this.errors = errors; // Any additional error details

        // Conditional assignment of the stack trace
        if(stack) {
            this.stack = stack; // If a stack trace is provided, assign it to this.stack
        }
        else{
            // If no stack trace is provided, capture the current stack trace
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export the apiError class so it can be used in other files
export { apiError };
