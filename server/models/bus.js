const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    from: String,
    to: String,
    seats: String,
    avaiableSeats: String,
    busId: String,
    contact: String,
    departureTime: String,
    arrivalTime: String
});

const bus = mongoose.model('bus', busSchema);

module.exports = bus;