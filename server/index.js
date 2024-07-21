const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const Restaurant = require('./Models/Restaurant.js');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.ATLAS_URI);

// Test function to determine if the api is functioning properly.
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

// Get single restaurant data
app.get('/restaurants/:id', async (req, res) => {
    const {id} = req.params; // Grabs obj id
    res.json(await Restaurant.findById(id));
});

// Gets all restaurants data
app.get('/restaurants', async (req,res) => {
    res.json( await Restaurant.find() );
})

// Specifies what port the api should be listening on.
app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);