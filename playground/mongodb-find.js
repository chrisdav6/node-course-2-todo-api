// var MongoClient = require("mongodb").MongoClient;
var {MongoClient, ObjectID} = require("mongodb"); //es6 destructuring

MongoClient.connect("mongodb://localhost/TodoApp", function(err, db) {
  if(err){
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to MongoDB");
  
  //Find Data in Mongo Database
  
  //Find users 
  db.collection("Users").find().toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });
  
  //Find All Todos
  // db.collection("Todos").find().toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });
  
  
  db.close(function() {
    console.log("Disconnected from MongoDB");
  });
});