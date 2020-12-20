require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is up and running on PORT " + PORT);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});
