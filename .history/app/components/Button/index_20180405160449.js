
import React from 'react';


class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <button className>{this.props.text}</button>
    );
  }
}

Button.propTypes = {

};

export default Button;
