
import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPromo from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container, Grid} from 'semantic-ui-react';
import {Wrapper} from 'components/Wrapper'
import image from '../../images/bg.png'
import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Button from '../../components/Button';
import Form from './Form';
import * as a from './actions';

export class Promo extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onSubmit = (value) => {
    if (value.promo !== '' || value.promo !== null){
        this.props.history.push('/start')
      }
  }

  render() {
    return (
      <div>
          <Helmet>
            <title>Promo</title>
            <meta name="description" content="Description of Promo" />
          </Helmet>

          <Header className="float-top"/>
          <Container textAlign="center" >
            <Grid.Row>
              <Grid.Column>
                <Heading text="It's your heart's full picture." />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <p className="main-text"> if your employer offers Hello Heart, your
                  <strong> Employer Code </strong> has been sent in an emial,
                  text, postcard, or pigeon :) Add it below!
                </p>
                <Form onSubmit={this.onSubmit} />
                <p className="sub-text">Have an account? Log in <span className="clr-primary">&#187;</span></p>
                </Grid.Column>
              </Grid.Row>
            </Container>
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
    submitAction: (payload) => dispatch(a.submitAction(payload))

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
