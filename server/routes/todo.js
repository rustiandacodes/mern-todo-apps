const express = require('express');
const router = express.Router();
const { getAllTodo, getTodo, createTodo, deleteTodo } = require('../controllers/TodoControllers');

// get all todo list data
router.get('/', getAllTodo);

// get specific todo
router.get('/:id', getTodo);

// insert new todo
router.post('/', createTodo);

// delete specific todo
router.delete('/:id', deleteTodo);

module.exports = router;
