import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingComponent from 'Views/landing/Landing.js';

import 'Sass/App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={LandingComponent} />
      </Router>
    );
  }
}

export default App;
