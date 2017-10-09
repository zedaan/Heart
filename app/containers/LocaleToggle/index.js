/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Toggle from 'components/Toggle';
import Wrapper from './Wrapper';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleLocaleToggle = ({ target }) => {
    this.props.onLocaleToggle(target.value);
  }
  render() {
    return (
      <Wrapper>
        <Toggle
          value={this.props.locale}
          values={appLocales}
          messages={messages}
          onToggle={this.handleLocaleToggle}
        />
      </Wrapper>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

const mapActionCreators = {
  onLocaleToggle: changeLocale,
};

export default connect(mapStateToProps, mapActionCreators)(LocaleToggle);
