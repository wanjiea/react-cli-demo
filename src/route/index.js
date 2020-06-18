import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router , Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';



import store from '../../src/redux/store';
import { persistor } from '../../src/redux/store';

import  Home from '../components/home';
import  Test from '../components/test';
import  Hoc from '../components/hoc';
import App from '../App';
  
ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router path="/app" component={ App }>
				<Route path="/home" component={Home} />
				<Route path="/test" component={Test} />
				<Route path="/hoc" component={Hoc} />
			</Router>
		</PersistGate>
	</Provider>
	,
	document.getElementById('root')
);