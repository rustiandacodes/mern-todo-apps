const express = require('express');
const router = express.Router();
const { getAllTodo, getTodo, createTodo, deleteTodo, updateTodo } = require('../controllers/TodoControllers');

// get all todo list data
router.get('/', getAllTodo);

// get specific todo
router.get('/:id', getTodo);

// insert new todo
router.post('/', createTodo);

// delete specific todo
router.delete('/:id', deleteTodo);

// update spefcific todo
router.patch('/:id', updateTodo);
module.exports = router;
