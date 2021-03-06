

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

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
      this.props.history.push('/login')
    } 
    document.getElementById('table-middle-row').classList.remove("alpha");
  }
  
  pageLoad = () => {
    document.getElementById('table-middle-row').classList.remove("alpha");
    document.getElementById('table-middle-row').classList.add("alpha");
  }

  render() {
    return (
      <div onLoad={this.pageLoad}>
        <Helmet>
          <title>Signup</title>
          <meta name="description" content="Description of Signup" />
        </Helmet>
       
        <Container>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column textAlign="center">
                <FormHeading text="Set up your account"/>
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
