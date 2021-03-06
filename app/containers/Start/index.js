/**
 *
 * Start
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectStart from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container, Grid, Form } from 'semantic-ui-react';
import { Wrapper } from 'components/Wrapper'
import image from '../../images/bg.png'
import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Button from '../../components/Button';

export class Start extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  handleSubmit = (props) => {
    this.props.history.push('/info')
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Start</title>
          <meta name="description" content="Description of Start" />
        </Helmet>
       

        <Header className="float-top"/>
        <Container textAlign="center">
          <Grid.Row>
            <Grid.Column>
              
              <Heading text="It's your heart's full picture." />
              <Button text="Start Now"  onClick={this.handleSubmit}/>
              <p className="sub-text">Have an account? Log in <span className="clr-primary">&#187;</span></p>
            </Grid.Column>
          </Grid.Row>
        </Container>
      </div>
    );
  }
}

Start.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  start: makeSelectStart(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'start', reducer });
const withSaga = injectSaga({ key: 'start', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Start);
