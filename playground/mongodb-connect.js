// var MongoClient = require("mongodb").MongoClient;
var {MongoClient, ObjectID} = require("mongodb"); //es6 destructuring

MongoClient.connect("mongodb://localhost/TodoApp", function(err, db) {
  if(err){
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to MongoDB");
  
  //Insert Data into Mongo Database
  //Enter a new Todo
  
  // db.collection("Todos").insertOne({
  //   text: "Go to store",
  //   completed: true
  // }, function(err, result){
  //   if(err){
  //     return console.log("Unable to insert Todo", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  
  
  //Enter a new User
  
  // db.collection("Users").insertOne({
  //   name: "Colleen",
  //   age: 40,
  //   location: "Albany, NY"
  // }, function(err, result){
  //   if(err){
  //     return console.log("Unable to insert User", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2) + " was inserted at " + result.ops[0]._id.getTimestamp());
  // });
  
  
  db.close(function() {
    console.log("Disconnected from MongoDB");
  });
});