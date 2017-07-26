var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("./db/mongoose.js");
var {Todo} = require("./models/todo.js");
var {User} = require("./models/user.js");
var {ObjectID} = require("mongodb");

var app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");

//Routes---------------------------
//Home - GET
app.get("/", function(req, res) {
  res.send("Home");
});

//Get Todos - GET
app.get("/todos", (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (error) => {
    res.status(400).send(error);
  });
});

//Get Todo by id - GET
app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(401).send("Id is not valid!");
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send("Id not found");
    }
    res.send({todo});
  }, (error) => {
    return res.status(400).send();
  });
});

//Post Todo - POST
app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send();
  });
});

//Remove Todo - DELETE
app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send("Id is not valid!");
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send("Todo not found");
    }
    res.send(todo);
  }, (error) => {
    res.status(400).send();
  });
});

//Server Start
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("App Started!");
});

module.exports = {
  app: app
};
