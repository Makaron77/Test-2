import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { message } from 'antd';
import axios from 'axios';
import styles from './AddTodo.module.css'

export default function AddTodoComponent() {
	const [todos, setTodos] = useContext(TodoContext);
	const [newTodo, setNewTodo] = useState('');

	const handleAddTodo = async event => {
		event.preventDefault();

		if (!newTodo.trim()) {
			message.error('Заполните поле');
			return;
		}
		try {
			const response = await axios.post('http://localhost:3005/api/todos', {
				name: newTodo,
				check: false,
			});

			setTodos(prevTodos => [...prevTodos, response.data]);

			setNewTodo('');
		} catch (error) {
			console.error('Ошибка при добавлении задачи:', error);
		}
	};

	return (
		<form onSubmit={handleAddTodo} className={styles.form}>
			<TextField
				id='standard-basic'
				label='Введите задачу'
				variant='standard'
				value={newTodo}
				onChange={e => setNewTodo(e.target.value)}
				className={styles.input}
			/>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				className={styles.button}
				
			>
				Добавить
			</Button>
		</form>
	);
}
