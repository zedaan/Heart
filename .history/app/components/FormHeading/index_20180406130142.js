
import React from 'react';
// import styled from 'styled-components';


class FormHeading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h2 className="clr-primary">{this.props.text}</h2>
    );
  }
}

FormHeading.propTypes = {

};

export default FormHeading;
