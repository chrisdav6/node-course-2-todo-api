var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("./db/mongoose.js");
var {Todo} = require("./models/todo.js");
var {User} = require("./models/user.js");

var app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");

//Routes---------------------------
//Home - GET
app.get("/", function(req, res) {
  res.send("Home");
});

//Post Todo - POST
app.post("/todos", function(req, res) {
  var todo = new Todo({
    text: req.body.text
  });
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

//Server Start
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("App Started!");
});
