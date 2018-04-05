
import React from 'react';
import PropTypes from 'prop-types';


class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // constructor(props){
  //   super();
  // }
  render() {
    return (
      <button className="btn-heart bg-primary">{this.props.text}</button>
    );
  }
}

Button.propTypes = {

};

export default Button;
