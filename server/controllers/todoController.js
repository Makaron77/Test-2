const { Todo } = require('../db/models');

exports.getAllTodos = async (req, res) => {
	try {
		const todos = await Todo.findAll();
		res.json(todos);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.addTodo = async (req, res) => {
	try {
		const { name, check } = req.body;

		if (!name && !check) {
			return res
				.status(400)
				.json({ message: 'Ошибка нет данных в теле запроса' });
		}

		const newTodo = await Todo.create({ name, check });

		res.status(201).json(newTodo);
		
	} catch (error) {
		console.error('Ошибка при добавлении задачи:', error);
		res.status(500).json({ message: 'Ошибка сервера' });
	}
};

exports.updateTodoCheck = async (req, res) => {
	const { id } = req.params;
	const { check } = req.body;
	try {
		const todo = await Todo.findByPk(id);
		todo.check = check;
		await todo.save();
		res.json(todo);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};


exports.deleteCompletedTodos = async (req, res) => {
	try {
		
		await Todo.destroy({
			where: {
				check: true,
			},
		});

		const todos = await Todo.findAll();

		
		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};