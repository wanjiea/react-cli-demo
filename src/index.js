import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import  Home from './components/home';
import  Test from './components/test';
import * as serviceWorker from './serviceWorker';
import store from '../src/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router path="/app" component={ App }>
				<Route path="/home" component={Home} />
				<Route path="/test" component={Test} />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
