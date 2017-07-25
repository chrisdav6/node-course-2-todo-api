var expect = require("expect");
var request = require("supertest");

var {app} = require("./../server");
var {Todo} = require("./../models/todo");
var {ObjectID} = require("mongodb");

var todos = [
  {
    _id: new ObjectID(),
    text: "First Test Todo"
  },
  {
    _id: new ObjectID(),
    text: "Second Test Todo"
  }
];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe("POST / todos", () => {
  it("should create a new todo", (done) => {
    var text = "Test todo text";
    
    request(app).post("/todos")
                .send({text})
                .expect(200)
                .expect((res) => {
                  expect(res.body.text).toBe(text);
        })
        .end((error, res) => {
        if(error){
          return done(error);
        }
        
        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((error) => done(error));
    });
  });
  
  it("should not create todo with invalid body data", (done) => {
    request(app).post("/todos")
                .send({})
                .expect(400)
        .end((error, res) => {
        if(error){
          return done(error);
        }
        
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((error) => done(error));
    });
  });
});

describe("GET /todos", () => {
  it("should get all todos", (done) => {
    request(app)
      .get("/todos")
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
    .end(done);
  });
});

describe("GET /todos/:id", () => {
  it("should get todo with ID", (done) => {
    request(app)
      .get("/todos/" + todos[0]._id.toHexString())
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
    .end(done);
  });
  
  it("should return a 404 if todo is not found", (done) => {
    var testId = new ObjectID();
    request(app)
      .get("/todos/" + testId.toHexString())
      .expect(404)
    .end(done);
  });
  
  it("should return 401 for non object IDs", (done) => {
    request(app)
      .get("/todos/123abc")
      .expect(401)
    .end(done);
  });
});