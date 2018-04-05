/**
*
* Heading
*
*/

import React from 'react';
// import styled from 'styled-components';


class Heading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h2>{this.props.text}</h2>
    );
  }
}

Heading.propTypes = {

};

export default Heading;
