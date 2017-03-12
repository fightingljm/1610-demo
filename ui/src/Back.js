import React from 'react';
import {browserHistory,hashHistory} from 'react-router'

class Back extends React.Component {
  handleClick(){
    // browserHistory.goBack()
    // hashHistory.goBack()
    // hashHistory.push('/')
    this.context.router.push('/')
  }
  render(){
    console.log(this.context.router);
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>返回首页</button>
      </div>
    )
  }
}
Back.contextTypes = {
  router:React.PropTypes.object
}
export default Back;
