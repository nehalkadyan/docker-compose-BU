const express = require("express");
const { createUser } = require("../controllers/user.controller")
// router

const router = express.Router()

// endpoint

router.post("/create-user", createUser)

module.exports = router

