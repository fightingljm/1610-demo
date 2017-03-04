import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  render(){
    return(
      <div>
        <Link to='/' activeStyle={{color:'red'}} activeClassName='cools' onlyActiveOnIndex={true}>home</Link><br/>
        <Link to='/about' activeStyle={{color:'red'}} activeClassName='cools' onlyActiveOnIndex={true}>about</Link><br/>
        <Link to='/work' activeStyle={{color:'red'}} activeClassName='cools'>work</Link><br/>
        <Link to='/about/me' activeStyle={{color:'red'}} activeClassName='cools'>me</Link>
      </div>
    )
  }
}

export default NavBar;
