// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const DB_NAME = "mongodb://localhost/lab-express-drones";

mongoose.connect(DB_NAME);

//documents
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

//call Drone model and create "drones" collection, using "drones"array as an argument
Drone.create(drones, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Creamos ${drones.length} en drone model`);
  mongoose.connection.close();
});
