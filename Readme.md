# Backend Project Setup

This is practice of backend with javascript
- Chai or Code Project model [Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)

### How to add code in github 

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin `https://github.com/DevNinjaX/Backend-Project.git`

git push -u origin main

Let's break down and explain the `apiError` class line by line.

### Code Explanation

```javascript
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
```

### Detailed Explanation

1. **Class Declaration**:
    ```javascript
    class apiError extends Error {
    ```
    - **apiError**: A custom error class that extends the built-in `Error` class in JavaScript. This allows it to inherit properties and methods from the `Error` class.

2. **Constructor Method**:
    ```javascript
    constructor(
        statuscode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
    ```
    - **constructor**: A special method for creating and initializing an object created with a class.
    - **statuscode**: An HTTP status code indicating the type of error (e.g., 404 for not found, 500 for internal server error).
    - **message**: An error message, defaulting to "Something went wrong" if not provided.
    - **errors**: An array to hold additional error details, defaulting to an empty array.
    - **stack**: A string to hold the stack trace, defaulting to an empty string.

3. **Calling Parent Constructor**:
    ```javascript
    super(message);
    ```
    - **super(message)**: Calls the constructor of the parent class (`Error`) with the provided message. This sets the `message` property of the `Error` class.

4. **Assigning Properties**:
    ```javascript
    this.statuscode = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    ```
    - **this.statuscode = statuscode**: Assigns the `statuscode` parameter to the `statuscode` property of the instance.
    - **this.data = null**: Initializes a `data` property to `null`, which can be used to store additional data related to the error.
    - **this.message = message**: Assigns the `message` parameter to the `message` property of the instance.
    - **this.success = false**: Sets a `success` property to `false`, indicating the operation was not successful.
    - **this.errors = errors**: Assigns the `errors` parameter to the `errors` property of the instance.

5. **Handling Stack Trace**:
    ```javascript
    if(stack) {
        this.stack = stack;
    }
    else{
        Error.captureStackTrace(this, this.constructor);
    }
    ```
    - **if(stack)**: Checks if a stack trace string was provided.
    - **this.stack = stack**: If a stack trace was provided, assigns it to the `stack` property of the instance.
    - **else**: If no stack trace was provided:
        - **Error.captureStackTrace(this, this.constructor)**: Captures the current stack trace and assigns it to the `stack` property of the instance. This method is used to create a `.stack` property on the target object.

6. **Exporting the Class**:
    ```javascript
    export { apiError };
    ```
    - **export { apiError }**: Exports the `apiError` class so that it can be imported and used in other modules or files.

### Summary

- **Custom Error Class**: `apiError` extends the built-in `Error` class to provide additional functionality for handling HTTP errors.
- **Properties**: The class includes properties such as `statuscode`, `message`, `success`, `errors`, and `data` to store relevant error information.
- **Stack Trace**: The constructor either assigns a provided stack trace or captures the current stack trace.
- **Export**: The class is exported for use in other parts of the application.