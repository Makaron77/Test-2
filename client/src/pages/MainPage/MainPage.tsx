import { List, ListItem } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import styles from './Main.module.css';
import axios from 'axios';
import { TodoContext } from '../../context/todoContext';
import CheckboxComponent from '../../components/TodoComponents/CheckboxComponent/CheckboxComponent';
import AddTodoComponent from '../../components/TodoComponents/AddTodoComponent/AddTodoComponent';
import FooterComponent from '../../components/TodoComponents/FooterComponent/FooterComponent';
import { Todo } from '../../types/types';

export default function MainPages() {
const [todos, setTodos, alignment] = useContext<Todo[] | string>(
	TodoContext,
);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await axios.get('http://localhost:3005/api/todos');
				setTodos(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchTodos();
	}, []);

	const filteredTodos = todos.filter(todo => {
		if (alignment === 'all') return true;
		if (alignment === 'active') return !todo.check;
		if (alignment === 'completed') return todo.check;
		return true;
	});

	return (
		<div className={styles.container}>
			<main className={styles.container__element}>
				<header className={styles.container__elementHeader}>
					<h1>todos</h1>
				</header>
				<AddTodoComponent />
				<List className={styles.container__elementList}>
					{filteredTodos.map(todo => (
						<ListItem key={todo.id}>
							<CheckboxComponent id={todo.id} check={todo.check} />
							<span className={todo.check ? styles.strikethrough : ''}>
								{todo.name}
							</span>
						</ListItem>
					))}
				</List>
					<FooterComponent/>
			</main>
		</div>
	);
}
