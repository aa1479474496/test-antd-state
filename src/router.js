import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Tests from './routes/TestState';
import Items from './routes/Items';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/test" exact component={Tests} />
        <Route path="/items" exact component={Items} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
