export interface Todo {
	id: number;
	name: string;
	check: boolean;
}

export type TodoContextType = [
	Todo[], 
	React.Dispatch<React.SetStateAction<Todo[]>>, 
	string, 
	React.Dispatch<React.SetStateAction<string>>, 
];

