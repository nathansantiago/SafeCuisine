const express = require('express');

const app = express();
const PORT = 3000;

// Test function to determine if the api is functioning properly.
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

// Specifies what port the api should be listening on.
app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);