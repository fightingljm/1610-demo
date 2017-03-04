import React from 'react';
import NavBar from './NavBar'

class About extends React.Component {
  render(){
    return(
      <div style={{border:'15px solid red'}}>
        about<br/>
        {this.props.children}
      </div>
    )
  }
}

export default About;
