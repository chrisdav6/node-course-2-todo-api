var {ObjectID} = require("mongodb");
var {mongoose} = require("./../server/db/mongoose");
var {Todo} = require("./../server/models/todo");
var {User} = require("./../server/models/user");

//Remove all entries in DB with Todo.reomove({});
Todo.remove({}).then((result) => {
  console.log(result);
});

//Remove one with Todo.findOneAndRemove();
Todo.findOneAndRemove({_id: "5978b8fc05b6d009a589ee22"}).then((todo) => {
  console.log(todo);
});

//Remove one with id Todo.findByIdAndRemove();
Todo.findByIdAndRemove({_id: "5978b8fc05b6d009a589ee22"}).then((todo) => {
  console.log(todo);
});