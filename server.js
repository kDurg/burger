var express = require ("express");
var app = express();
var PORT = process.env.PORT || 3000 

app.listen();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

