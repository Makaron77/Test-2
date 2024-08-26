import React, { useContext } from 'react';
import { TodoContext } from '../../../context/todoContext';
import axios from 'axios';
import { Checkbox, Radio } from '@mui/material';
import { grey, pink } from '@mui/material/colors';

export default function CheckboxComponent({ id, check }) {
	const [todos, setTodos] = useContext(TodoContext);

	const handleCheck = async event => {
		const check = event.target.checked;

		setTodos(prevTodos =>
			prevTodos.map(todo =>
				todo.id === id ? { ...todo, check: check } : todo,
			),
		);

		try {
			await axios.patch(`http://localhost:3005/api/todos/${id}`, {
				check: check,
			});
		} catch (error) {
			console.error(error);

			setTodos(prevTodos =>
				prevTodos.map(todo =>
					todo.id === id ? { ...todo, check: !check } : todo,
				),
			);
		}
	};

	return (
		<Checkbox
			// color='secondary'
			sx={{
				color: grey[600],
				'&.Mui-checked': {
					color: grey[400],
				},
			}}
			checked={check || false}
			onChange={handleCheck}
		/>
	);
}
