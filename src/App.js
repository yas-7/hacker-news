import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NewsList from './features/news-list/NewsList';
import NewsDetail from './features/news-detail/NewsDetail';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          <Route exact path='/' component={NewsList} />
          <Route path={'/news/:id'} component={NewsDetail} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
