const mongoose = require('mongoose');
// const { Schema } = mongoose;

// Template for handling restaraunts in the database

const RestaurantSchema = new mongoose.Schema ({
    address: {
        building: String,
        street: String,
        coord: [Number],
        town: String,
        state: String,
        zipcode: String,
    },
    menu: String,
    name: String,
    phone: String,
    rating: Number,
    numberOfRatings: Number,
});

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = RestaurantModel;