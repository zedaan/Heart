
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Container } from 'semantic-ui-react'
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPromo from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Grid } from 'semantic-ui-react';
import {Wrapper} from 'components/Wrapper'

export class Promo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
          <Helmet>
            <title>Promo</title>
            <meta name="description" content="Description of Promo" />
          </Helmet>
          <Wrapper>
            <Container>
              <Grid.Row>
                <Grid.Column>
                  <h1>jfshkfs</h1>
                </Grid.Column>
              </Grid.Row>
            </Container>
          </Wrapper>
      </div>
    );
  }
}

Promo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  promo: makeSelectPromo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'promo', reducer });
const withSaga = injectSaga({ key: 'promo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Promo);
