const mongoose = require('mongoose');
// const { Schema } = mongoose;

// Template for handling reviews in the database

const ReviewSchema = new mongoose.Schema ({
    restaurant_id: mongoose.ObjectId,
    name: String,
    email: String,
    text: String,
    date: Date,
    rating: Number,
    allergens: [String],
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;