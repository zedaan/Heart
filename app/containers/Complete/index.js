/**
 *
 * Complete
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
import makeSelectComplete from './selectors';
import reducer from './reducer';
import saga from './saga';

import { Container, Grid, Form, Image } from 'semantic-ui-react';
import Mockup from '../../images/mockup.png'
import { Wrapper } from 'components/Wrapper'
import Button from '../../components/Button';

export class Complete extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  pageLoad = () => {
    document.getElementById('table-middle-row').classList.add("alpha");
  }

  render() {
    return (
      <div onLoad={this.pageLoad}>
        <Helmet>
          <title>Complete</title>
          <meta name="description" content="Description of Complete" />
        </Helmet>

        <Wrapper className="complete-page">
          <Container textAlign="center">
              <Image src={Mockup} className="Mockup" size='large' centered />
              <h2 className="Heading" >Great Job!</h2>
              <p className="main-text"> Now, get the Hello Heart app to order your
                <br /><strong>FREE blood pressure monitor. </strong>
              </p>
              <Button text="Get the app to order your device! " />
          </Container>
        </Wrapper>

      </div>
    );
  }
}

Complete.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  complete: makeSelectComplete(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'complete', reducer });
const withSaga = injectSaga({ key: 'complete', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Complete);
