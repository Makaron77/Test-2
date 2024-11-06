import { Dispatch, SetStateAction } from 'react';

export interface ITodo {
	id: number;
	name: string;
	check: boolean;
}

export type TodoContextType = [
	ITodo[],
	Dispatch<SetStateAction<ITodo[]>>,
	string,
	Dispatch<SetStateAction<string>>,
];
