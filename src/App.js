import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Navigation from './components/Navigation';

// eslint-disable-next-line
class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:movie" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default Routes;
