// Define a class named apiResponse
class apiResponse {
    // The constructor method for initializing an instance of the apiResponse class
    constructor(
        statuscode, // The HTTP status code for the response (e.g., 200, 404)
        data, // The data to be included in the response body
        message = "Success" // Default message if none is provided
    ){
        this.statuscode = statuscode; // Assign the status code to the instance
        this.data = data; // Assign the data to the instance
        this.message = message; // Assign the message to the instance
        this.success = statuscode < 400; // Determine success based on the status code (true if status code is less than 400, false otherwise)
    }
}

// Export the apiResponse class so it can be used in other files
export { apiResponse };
