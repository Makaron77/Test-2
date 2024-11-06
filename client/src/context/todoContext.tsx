import React, { createContext, FC, ReactNode, useState } from 'react';
import { ITodo, TodoContextType } from '../types/types';

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoAppContext: FC<{ children: ReactNode }> = ({ children }) => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	const [alignment, setAlignment] = useState<string>('all');

	return (
		<TodoContext.Provider value={[todos, setTodos, alignment, setAlignment]}>
			{children}
		</TodoContext.Provider>
	);
};
