import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './components/home.js'
import Page1 from './components/page1.js'
import Page2 from './components/page2.js'

import './App.css'

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history = {history}>
                <div className="container">
                    <ul className="menus">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/page1">Page1</Link></li>
                        <li><Link to="/page2">Page2</Link></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/page1" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
