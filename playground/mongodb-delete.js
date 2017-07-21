// var MongoClient = require("mongodb").MongoClient;
var {MongoClient, ObjectID} = require("mongodb"); //es6 destructuring

MongoClient.connect("mongodb://localhost/TodoApp", function(err, db) {
  if(err){
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to MongoDB");
  
  //Delete Data in Mongo Database
  
  //deleteMany with text Walk the dog
  // db.collection("Todos").deleteMany({text: "Walk the dog"}).then((result) => {
  //   console.log(result);
  // });
  
  //deleteOne with text Go to store
  // db.collection("Todos").deleteOne({text: "Go to store"}).then((result) => {
  //   console.log(result);
  // });
  
  //findOneAndDelete with completed value of false
  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  
  // db.collection("Users").deleteMany({name: "Chris"}).then((result) => {
  //   console.log(result);
  // });
  
  db.collection("Users").findOneAndDelete({_id: new ObjectID("59724a777e4dec1765333a29")}).then((result) => {
    console.log(result);
  });
  
  // db.close(function() {
  //   console.log("Disconnected from MongoDB");
  // });
});