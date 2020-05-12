import React from 'react';
import { Router, Route } from 'react-router';
import  Home from '../components/home';
import  Test from '../components/test';
import App from '../../App';


React.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="home" component={Home} />
            <Route path="test" component={Test}>
            </Route>
        </Route>
    </Router>
  ), document.body)