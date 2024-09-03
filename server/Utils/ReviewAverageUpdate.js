require('dotenv').config( {path: 'server/.env' } );
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.ATLAS_URI);

client.connect();

const database = client.db('test');
const reviewsCollection = database.collection('reviews');

const cursor = reviewsCollection.aggregate (
    [
        {
            $group:
            {
                _id: "$restaurant_id",
                avgRating: { $avg: "$rating" }
            }
        }
    ]
);

cursor.forEach(doc => {
    console.log(doc.avgRating);
})