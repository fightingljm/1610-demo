import React from 'react';
import NavBar from './NavBar'

class Home extends React.Component {
  render(){
    return(
      <div style={{border:'5px solid #000'}}>
        {this.props.children}
        {this.props.body}
        {this.props.main}
        <NavBar/>
      </div>
    )
  }
}

export default Home;
