import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Course from './Course';

const App = () => (
  <Router>
    <Switch>
      <Route path="/react" component={Course} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
