/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.css';
import Promo from 'containers/Promo/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
`;

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
            {/* <Route path="" component={NotFoundPage} /> */}
        </Switch>
    </AppWrapper>
  );
}
