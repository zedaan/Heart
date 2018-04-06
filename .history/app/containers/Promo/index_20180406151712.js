
import React from 'react';
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
import { Container, Grid, Form } from 'semantic-ui-react';
import {Wrapper} from 'components/Wrapper'
import image from '../../images/bg.png'
import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Button from '../../components/Button';

export class Promo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
          <Helmet>
            <title>Promo</title>
            <meta name="description" content="Description of Promo" />
          </Helmet>
          <Wrapper>
          <Container textAlign="center">
            <Grid.Row>
              <Grid.Column>
                  <Header />
                  <Heading text="It's your heart's full picture."/>
                  <p className="main-text"> if your employer offers Hello Heart, your
                    <strong> Employer Code </strong> has been sent in an emial,
                    text, postcard, or pigeon :) Add it below!
                  </p>
                  <Form.Field>
                  <label className="label">My Premium Code is: </label>
                  <input className="main-input" size='large' placeholder='Type Code Here ' />
                  </Form.Field>
                  <Button text="Start Now!"/>
                  <p className="sub-text">Have an account? Log in <span className="clr-primary">&#187;</span></p>
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
