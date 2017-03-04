import React from 'react';

class Test extends React.Component {
  getValue(){
    return this.refs.input.value
  }
  handleClick(){
    alert('aaa')
  }
  render(){
    return(
      <div>
        我是测试组件
        <input type='text' defaultValue='111' ref='input'/>
        <button onClick={this.handleClick.bind(this)}>aa</button>
      </div>
    )
  }
}

export default Test;
