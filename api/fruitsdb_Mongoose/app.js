const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruits_db, { useNewUrlParser: true}")

//create schema for mongoose 

const fruitschema = new mongoose.Schema({

  nav : String,
  rating: Number,
  review: String,
}),






























//Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'fruits_db'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use the connect method to connect to the server
client.connect(function (err) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to server');

  // Now you can work with the MongoDB database
  const db = client.db(dbName);

  // For example, you can perform database operations here
  // e.g., insert, find, update, delete

  // Close the MongoDB client when done
  client.close();
});
