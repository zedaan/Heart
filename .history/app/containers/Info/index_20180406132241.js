

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInfo from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Grid, Container } from 'semantic-ui-react';
import { Wrapper } from 'components/Wrapper'
import Button from "components/Button";
import ColorHeading from "components/ColorHeading";

export class Info extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Info</title>
          <meta name="description" content="Description of Info" />
        </Helmet>
        <Wrapper>
          <Container>
            <Grid.Row>
              <Grid.Column>
                <Button text="Start Now"/>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

Info.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: makeSelectInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'info', reducer });
const withSaga = injectSaga({ key: 'info', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Info);
