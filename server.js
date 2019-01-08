var express = require ("express");
var app = express();
var PORT = process.env.PORT || 3000 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set up path to index.handlebars
// app.get("/", function (req, res) {
//     res.send(index)
// })

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening to PORT: "+ PORT);
});
