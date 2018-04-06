

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignup from './selectors';
import reducer from './reducer';
import saga from './saga';
import Button from "components/Button";
import FormHeading from "components/FormHeading";
import { Grid, Container } from 'semantic-ui-react';
import SignupForm from './SignupForm';

export class Signup extends React.Component { // eslint-disable-line react/prefer-stateless-function


  onSubmit = (value) => {
    if(value.email !== '' && value.password !== ''){
      this.props.histroy.push('/')
        {/* <Redirect to="/" /> */}
    } else{
      console.log('false')
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Signup</title>
          <meta name="description" content="Description of Signup" />
        </Helmet>

        <Container style={{ padding: '50px 0' }}>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column textAlign="center">
                <FormHeading text="Set up your account" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <SignupForm onSubmit={this.onSubmit} />
              </Grid.Column>
            </Grid.Row>
           
          </Grid>
        </Container>
      </div>
    );
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Signup);
