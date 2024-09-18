import React, { useContext } from 'react';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import styles from './PopconfirmComponent.module.css';
import axios from 'axios';
import { TodoContext } from '../../../context/todoContext';

const PopconfirmComponent: React.FC = () => {
	const [todos, setTodos] = useContext(TodoContext);

	const confirm: PopconfirmProps['onConfirm'] = async () => {
		try {
			const hasCompletedTasks = todos.some(todo => todo.check);
			if (hasCompletedTasks) {
				await axios.delete('http://localhost:3005/api/todos');

				const response = await axios.get('http://localhost:3005/api/todos');

				setTodos(response.data);
				message.success('завершенная задача удалена');
			} else {
				message.warning('нет завершенных задач');
			}
		} catch (error) {
			message.error('Ошибка при удалении задач');
		}
	};

	const cancel: PopconfirmProps['onCancel'] = () => {
		
	};

	return (
		<Popconfirm
			title='Удаление завершенных задач'
			description='Ты уверен, что хочешь удалить?'
			onConfirm={confirm}
			onCancel={cancel}
			okText='Да'
			cancelText='Неа'
			className={styles.customPopconfirm}
		>
			<Button danger>Очистить завершенные</Button>
		</Popconfirm>
	);
};

export default PopconfirmComponent;
