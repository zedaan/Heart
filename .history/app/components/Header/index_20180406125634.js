/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import logo from '../../images/logoo.jpg'
import {Image} from 'semantic-ui-react'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Header">
        <Image src={logo} className="logo" size='small' centered/>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
