const mongoose = require("mongoose");

// schema

const userSchema = mongoose.Schema({
    name: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    }
})

// model

const User = new mongoose.model("User", userSchema)

module.exports = User