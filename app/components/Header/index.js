/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import logo from '../../images/logo.png'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <img src={logo} size='medium' centered/>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
