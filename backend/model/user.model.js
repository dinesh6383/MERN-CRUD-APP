const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todo: String,
});

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  todos: [todoSchema],
});

const User = mongoose.model("users", UserSchema);
const Todo = mongoose.model("todos", todoSchema);

module.exports = User;
