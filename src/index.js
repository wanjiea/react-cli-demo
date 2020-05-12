import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import './index.css';
import App from './App';
import  Home from './components/home';
import  Test from './components/test';
import * as serviceWorker from './serviceWorker';
import store from '../src/redux/store';
import { persistor } from '../src/redux/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router path="/app" component={ App }>
					<Route path="/home" component={Home} />
					<Route path="/test" component={Test} />
				</Router>
				</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
