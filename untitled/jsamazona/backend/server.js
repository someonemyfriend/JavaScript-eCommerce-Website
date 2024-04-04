const express = require("express");
const data = require('./data.js');
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(3031, () => {
  console.log('serve at http://localhost:3031');
});