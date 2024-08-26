const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTodos);

router.patch('/:id', todoController.updateTodoCheck);

router.post('/', todoController.addTodo);

router.delete('/', todoController.deleteCompletedTodos);

module.exports = router;
