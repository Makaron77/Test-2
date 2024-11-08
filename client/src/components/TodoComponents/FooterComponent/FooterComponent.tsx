import React, { useContext, useEffect, useState } from 'react'
import styles from './FooterComponent.module.css'
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import PopconfirmComponent from '../../AntComponents/PopconfirmComponent/PopconfirmComponent';
import { TodoContext } from '../../../context/todoContext';
import { TodoContextType } from '../../../types/types';
export default function FooterComponent() {


	const [todos, setTodos, alignment, setAlignment] =
		useContext(TodoContext)!;


	return (
		<footer className={styles.footer}>
			<div
				className={styles.footer__blockItem}
			>{`${todos.filter(todo => !todo.check).length} активных задач`}</div>
			<ToggleButtonGroup
				color='primary'
				value={alignment}
				exclusive
				onChange={(event: React.MouseEvent<HTMLElement>, value: string) => {
					if (value) setAlignment(value);
				}}
				aria-label='Platform'
				className={styles.footer__blockSorted}
			>
				<ToggleButton className={styles.button} value='all'>
					Все
				</ToggleButton>
				<ToggleButton className={styles.button} value='active'>
					Активные
				</ToggleButton>
				<ToggleButton className={styles.button} value='completed'>
					Завершённые
				</ToggleButton>
			</ToggleButtonGroup>

			<PopconfirmComponent />
		</footer>
	);
}
