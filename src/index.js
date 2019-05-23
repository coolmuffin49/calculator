import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CReducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(CReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));