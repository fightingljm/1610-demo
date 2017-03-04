import React from 'react';

class Signin extends React.Component {
  render(){
    let styles = {
      border : 'none',
      outline : 'none'
    }
    return(
      <form className = 'navbar'>
        <div className = 'form-group'>
          <input type="text" placeholder="Email" style = {styles}/>
        </div>
        <div className = 'form-group'>
          <input type="password" placeholder="Password" style = {styles}/>
        </div>
        <button type="submit" className = 'arrow'>Sign in</button>
      </form>
    )
  }
}

export default Signin;
