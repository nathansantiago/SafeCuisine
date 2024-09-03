require('dotenv').config( {path: 'server/.env' } ); // Gets env variables
const { MongoClient } = require('mongodb'); // Imports the mongoDB library

async function updateRestarauntRatings() {
    const client = new MongoClient(process.env.ATLAS_URI); // Creates Mongo Client instance using the connection string

    try {
        client.connect(); // Connects to the database

        const database = client.db('test'); // Selects the database being used
        const reviewsCollection = database.collection('reviews'); // Collection containing all review data
        const restaurantsCollection = database.collection('restaurants'); // Collection containing all restaurant data

        // Aggregate performs mongoDB cmd line operation on specified collection
        const cursor = reviewsCollection.aggregate (
            [
                {
                    $group:  // Groups all reviews matching the restaraunt id together
                    {
                        _id: "$restaurant_id",
                        avgRating: { $avg: "$rating" },  // Averages the rating values in the reviews for a restaurant
                        numberOfRatings: { $sum: 1}  // Counts the number of reviews for each restaurant
                    }
                }
            ]
        );

        // Runs the aggregation for unique group of reviews
        for await (const doc of cursor) {
            console.log(`Restaraunt: ${doc._id}\nAverage rating: ${doc.avgRating}\nNumber of ratings: ${doc.numberOfRatings}`);
            await restaurantsCollection.updateOne (
                { _id: doc._id },  // Identifies which restaraunt to update.
                { $set: { rating: doc.avgRating, numberOfRatings: doc.numberOfRatings } },  // Sets the fields in the restaurant entries
                { upsert: true } // Allows inserts if document does not have ratings yet.
            );
            console.log(`successfully inserted new data at ${doc._id}.`);
        };
        console.log("Successfully updated all entries.");
    } 
    catch (err) {
        console.log(err.message);
    }
    finally {
        await client.close();
    }
}

updateRestarauntRatings();