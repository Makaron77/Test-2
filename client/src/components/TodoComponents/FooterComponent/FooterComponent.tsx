import React, { useContext, useEffect, useState } from 'react'
import styles from './FooterComponent.module.css'
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import PopconfirmComponent from '../../AntComponents/PopconfirmComponent/PopconfirmComponent';
import { TodoContext } from '../../../context/todoContext';
export default function FooterComponent() {


	const [todos, setTodos, alignment, setAlignment] = useContext(TodoContext);


	return (
		<footer className={styles.footer}>
			<div className={styles.footer__blockItem}>{`${todos.filter(todo => !todo.check).length} items left`}</div>
			<ToggleButtonGroup
				color='primary'
				value={alignment}
				exclusive
				onChange={event =>
					event.target.value && setAlignment(event.target.value)
				}
				aria-label='Platform'
				className={styles.footer__blockSorted}
			>
				<ToggleButton value='all'>All</ToggleButton>
				<ToggleButton value='active'>Active</ToggleButton>
				<ToggleButton value='completed'>Completed</ToggleButton>
			</ToggleButtonGroup>

			<PopconfirmComponent/>
		
		</footer>
	);
}
