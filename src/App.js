import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import * as history from 'history'

import {Provider} from 'react-redux';
import configureStore from './redux/Store';
import Home from './containers/Home';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Plan from "./containers/Plan";

import './App.css';

const store = configureStore();
window.store = store;

export default () => (
    <Provider store={store}>
        <BrowserRouter history={history.createBrowserHistory()}>
            <div className="container">
                <ul className="menus">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/page2">Page2</Link></li>
                    <li><Link to="/plan">Plan</Link></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/page1" component={Page1}/>
                    <Route exact path="/page2" component={Page2}/>
                    <Route exact path="/plan" component={Plan}/>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
);
