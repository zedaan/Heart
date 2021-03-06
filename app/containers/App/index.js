

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.css';
import Promo from 'containers/Promo/Loadable';
import Start from 'containers/Start/Loadable';
import Complete from 'containers/Complete/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Info from 'containers/Info/Loadable';
import Signup from 'containers/Signup/Loadable';
import Login from 'containers/Login/Loadable';

const AppWrapper = styled.div`
  height: 100vh;
`

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Hello Heart App"
        defaultTitle="Hello Heart App"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <div id="table">
        <div id="table-middle-row">

          <Switch>
              <Route exact path="/" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/Promo" component={Promo} />
              <Route path="/start" component={Start} />
              <Route path="/complete" component={Complete} />
              <Route path="/info" component={Info} />
              <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </AppWrapper>
  );
}
