import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../components/Home.js';
import MovieDetail from '../components/Movie/MovieDetail.js';
import MoviePopuler from '../components/MoviePopuler.js';
import configureStore from '../store';


import '../App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store = {store}>
      <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/popular' component={MoviePopuler} />
        <Route exact path='/:id' component={MovieDetail} />
      </Switch>
      </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
