import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TodoAppContext } from './context/todoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TodoAppContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</TodoAppContext>
	</React.StrictMode>,
);
