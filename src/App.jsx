import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import SearchView from './views/SearchView';
import ProfileView from './views/ProfileView';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={SearchView} />
        <Route path="/**" exact component={ProfileView} />
      </Switch>
    </HashRouter>
  </Router>
);
export default App;
