import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import AppRouter from './routes/AppRouter';


//import redux.
import {createStore} from 'redux'
//connects global store to entire app.
import { Provider } from 'react-redux'

import allReducers from './redux/reducers/index'


const store = createStore(allReducers)

ReactDOM.render(
	<Provider store={store}>
    	<AppRouter/>,
  	</Provider>,
	document.getElementById('root')
);
