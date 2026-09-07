// import User Model

const User = require("../models/user.model");

// create user (sample controller)

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = User({
            name, email, password
        })

        await newUser.save()

        return res.status(201)
            .json({
                message: "User created!",
                user: newUser
            })

    } catch (err) {
        console.log("err", err.message)
    }
}

module.exports = { createUser }