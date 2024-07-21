const mongoose = require('mongoose');
// const { Schema } = mongoose;

// Template for handling restaraunts in the database

const RestaurantSchema = new mongoose.Schema ({
    address: {
        building: String,
        street: String,
        coord: [Number],
        zipcode: String,
    },
    menu: String,
    name: String,
    phone: String,
});

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = RestaurantModel;