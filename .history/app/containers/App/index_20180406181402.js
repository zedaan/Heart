

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
        <Switch>
            <Route exact path="/" component={Promo} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/complete" component={Complete} />
            <Route exact path="/Info" component={Info} />
            <Route exact path="/Signup" component={Signup} />
            {/* <Route path="" component={NotFoundPage} /> */}
        </Switch>
    </AppWrapper>
  );
}
