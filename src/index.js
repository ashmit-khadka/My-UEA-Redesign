import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import AppRouter from './routes/AppRouter';

ReactDOM.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>,
	document.getElementById('root')
);
