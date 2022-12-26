const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true},
    mobile: String,
    age: String,
    password: {type: String, required: true}
});



const user = mongoose.model('user', userSchema);

module.exports = user;