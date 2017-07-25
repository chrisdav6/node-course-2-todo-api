var {ObjectID} = require("mongodb");
var {mongoose} = require("./../server/db/mongoose");
var {Todo} = require("./../server/models/todo");
var {User} = require("./../server/models/user");

var id = "597606cc87254709963e1004";

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos find", todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo find One", todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("Id not found!");
//   }
//   console.log("Todo find by id", todo);
// }).catch((error) => console.log(error));

User.findById(id).then((user) => {
  if(!user){
    return console.log("User not found!");
  }
  console.log("User by ID", user);
}).catch((error) => console.log(error));

