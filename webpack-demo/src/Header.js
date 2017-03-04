import React from 'react';

import Logo from './Logo';
import Signin from './Signin';
class Header extends React.Component {
  render(){
    let styles = {
      backgroundColor : '#444',
      height : '50px',
      width : '100%',
      padding : '0 15px'
    }
    return(
      <div style = {styles}>
        <Logo/>
        <Signin/>
      </div>
    )
  }
}

export default Header;
