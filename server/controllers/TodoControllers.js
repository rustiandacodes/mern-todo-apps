const Todo = require('../models/TodoModel');
const mongoose = require('mongoose');

//get all todolist
const getAllTodo = async (req, res) => {
  const todo = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todo);
};

// get specific todo list
const getTodo = async (req, res) => {
  const { id } = req.params;

  !mongoose.Types.ObjectId.isValid(id) ? res.status(404).json({ error: 'No Such a todo' }) : '';

  const todo = await Todo.findById(id);

  !todo ? res.status(404).json({ error: 'No Such a todo' }) : res.status(200).json(todo);
};

// create new todolist
const createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = await Todo.create({ title, description });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete todolist

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  !mongoose.Types.ObjectId.isValid(id) ? res.status(404).json({ error: 'No Such a todo' }) : '';

  const todo = await Todo.findOneAndDelete(id);

  !todo ? res.status(404).json({ error: 'No Such a todo' }) : res.status(200).json(todo);
};

// upadate todolist

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  !mongoose.Types.ObjectId.isValid(id) ? res.status(404).json({ error: 'No Such a todo' }) : '';

  const todo = await Todo.findOneAndUpdate(id, { title, description });
};

module.exports = { getAllTodo, getTodo, createTodo, deleteTodo };
