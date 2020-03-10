const bodyParser = require("body-parser");
const express = require("express");
const dbRoutes = require("./routes/db")
const mysqlConnection = require("./connection");

var app = express();
app.use(bodyParser.json());

app.use("/", dbRoutes);

app.listen(3000);