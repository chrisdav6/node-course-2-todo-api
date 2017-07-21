// var MongoClient = require("mongodb").MongoClient;
var {MongoClient, ObjectID} = require("mongodb"); //es6 destructuring

MongoClient.connect("mongodb://localhost/TodoApp", function(err, db) {
  if(err){
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to MongoDB");
  
  //Update Data in Mongo Database
  
  //findOneAndUpdate
  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5972403a09763c166dfa1989")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  
  db.collection("Users").findOneAndUpdate({
    name: "Steve Brule"
  }, {
    $set: {
      name: "Steve Brule"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  
  
  // db.close(function() {
  //   console.log("Disconnected from MongoDB");
  // });
});