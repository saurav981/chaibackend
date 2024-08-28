require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello Saurav</h1>");
});

app.get("/about", (req, res) => {
  res.send("This is our about us page");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.COMPANY}`);
});
