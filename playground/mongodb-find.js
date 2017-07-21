// var MongoClient = require("mongodb").MongoClient;
var {MongoClient, ObjectID} = require("mongodb"); //es6 destructuring

MongoClient.connect("mongodb://localhost/TodoApp", function(err, db) {
  if(err){
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to MongoDB");
  
  //Find Data in Mongo Database
  db.collection("Users").find({name: "Chris"}).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });
  
  
  db.close(function() {
    console.log("Disconnected from MongoDB");
  });
});