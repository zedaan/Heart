/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { DAEMON as mode } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    repos: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.bool,
    ]),
    onLoadRepos: PropTypes.func,
    username: PropTypes.string,
    onChangeUsername: PropTypes.func,
  };

  componentDidMount() {
    if (this.props.username) {
      this.props.onChangeUsername(this.props.username.trim());
    }
  }

  handleChangeUsername = ({ target }) => {
    this.props.onChangeUsername(target.value);
  }

  handleSubmitForm = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.props.onLoadRepos();
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.handleSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.handleChangeUsername}
                />
              </label>
            </Form>
            <ReposList {...reposListProps} />
          </Section>
        </div>
      </article>
    );
  }
}

// Note we create new instances of each selector
const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const actionCreators = {
  onLoadRepos: loadRepos,
  onChangeUsername: changeUsername,
};

// Unique key for slice reducer and
// saga lifecycle state
const key = 'home';

// Higher-order components to:
//  - withConnect: Connect to store, bind action creators
//  - withReducer: Inject and initialize the new reducer and at specified key
//  - withSaga: Attach our watcher saga (run as a background DAEMON)
const withConnect = connect(mapStateToProps, actionCreators);
const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga, mode });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
