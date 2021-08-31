const express = require("express");
require("dotenv").config();
const app = express();
// let ejs = require("ejs");

const path = require("path");
// const mongoose = require("mongoose");
const port = 7000;

// var fs = require("fs");
// fs.unlinkSync("8000;");
app.set("view engine", "ejs");
app.use("/", require(path.join(__dirname, "routes/blog.js")));
//app.use("/", require(path.join(__dirname, "js/main.js")));

app.listen(port, () => {
  console.log(` Blog app running on port:${port}`);
});
