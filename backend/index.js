// substitute the URL with your MongoDB connection string.
const url = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase";

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(
  express.json({
    limit: "16kb",
  })
);

const cardRoute = require("./card/cardRoute");

app.use("", cardRoute);

mongoose
  .connect(url)
  .then(
    app.listen(4000, () => {
      console.log("server running on port 4000");
    })
  )
  .catch((error) => {
    console.log("connection error : ", error);
  });
