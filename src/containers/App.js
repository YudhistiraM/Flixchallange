import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <div>
      <Home />

      </div>
    );
  }
}

export default App;
