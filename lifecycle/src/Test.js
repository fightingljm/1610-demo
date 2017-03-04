import React from 'react';

export default class Test extends React.Component {
  componentWillReceiveProps(nextProps){
    console.log('Test will receive props===',nextProps);
  }
  componentWillUpdate(nextProps,nextState){
    console.log('Test will update===',nextProps,nextState);
  }
  componentWillUnmount(){
    console.log('我要被销毁了');
  }
  render(){
    return(
      <div>
        我是test组件:{this.props.childNum}
      </div>
    )
  }
}
