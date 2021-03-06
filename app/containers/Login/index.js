
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import Button from "components/Button";
import FormHeading from "components/FormHeading";
import { Grid, Container } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import Header from '../../components/Header'


export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onSubmit = (value) => {
    if (value.email !== '' && value.password !== '') {
      this.props.history.push('/promo')
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
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>

            <Header className="float-top"/>
            <Container id="login-form">
              
              <Grid>
                <Grid.Row columns={1}>
                  <Grid.Column textAlign="center">
                    <FormHeading text="Welcome Back!" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <LoginForm onSubmit={this.onSubmit} />
                  </Grid.Column>
                </Grid.Row>

              </Grid>
            </Container>
         
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
