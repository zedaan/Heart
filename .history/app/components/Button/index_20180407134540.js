
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Link className="btn-heart bg-primary btn-custom" onClick={this.props.onClick}>
        {this.props.text}
      </Link>
    );
  }
}

Button.propTypes = {

};

export default Button;
