import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LandingComponent from "./page/landing/Landing.js";

import logo from './sass/logo.svg';
import './sass/App.css';

class App extends Component {
    render() {
        return (

            <Router basename={process.env.PUBLIC_URL}>

                <Route exact path="/" component={LandingComponent}/>

            </Router>

        );
    }
}

export default App;
