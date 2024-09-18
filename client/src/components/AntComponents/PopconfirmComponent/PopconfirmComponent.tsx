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
				message.success('Tasks deleted successfully');
			} else {
				message.success('Больше нет завершенных задач');
			}
		} catch (error) {
			message.error('Failed to delete tasks');
		}
	};

	const cancel: PopconfirmProps['onCancel'] = () => {
		message.error('Click on No');
	};

	return (
		<Popconfirm
			title='Delete the task'
			description='Are you sure to delete this task?'
			onConfirm={confirm}
			onCancel={cancel}
			okText='Yes'
			cancelText='No'
			className={styles.customPopconfirm}
		>
			<Button danger>Очистить завершенные</Button>
		</Popconfirm>
	);
};

export default PopconfirmComponent;
