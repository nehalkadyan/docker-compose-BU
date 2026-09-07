const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
// import user route
const userRoutes = require("./routes/user.routes")

// app
const app = express();

// middleware -> parse json data
app.use(express.json())

// port
const port = process.env.PORT || 4000;

// connect to db
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Db is connected");
}).catch((err) => {
    console.log(err);
});

app.use("/api", userRoutes)

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Status is OK!" })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});