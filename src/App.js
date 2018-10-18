import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LandingComponent from "./page/landing/Landing.js";

import logo from './sass/logo.svg';
import './sass/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Router>

                    <Route exact path="/" component={LandingComponent}/>

                </Router>
            </div>
        );
    }
}

export default App;
