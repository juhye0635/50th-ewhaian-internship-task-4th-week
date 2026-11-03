const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/product.route.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/Node-API")
  .then(() => {
    console.log("Connected to database!");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed:", error.message);
  });