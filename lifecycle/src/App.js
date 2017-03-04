import React from 'react';
import Test from './Test';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      num:1,
      show:true
    }
    console.log('initial state');
  }
  componentWillMount(){
    console.log('will mount');
  }
  componentWillReceiveProps(nextProps){
    console.log('will receive props===',nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('should update===',nextProps,nextState);
    if(nextState.num<5){
      return true
    }
    return false
  }
  componentWillUpdate(nextProps,nextState){
    console.log('will update===',nextProps,nextState);
  }
  componentDidUpdate(prevProps,prevState){
    console.log('did update===',prevProps,prevState);
  }
  render(){
    console.log('render');//挂载
    return(
      <div>
        数值:{this.state.num}
        <button onClick={()=>this.setState({num:this.state.num+1})}>click</button>
        <button onClick={() => this.setState({show:false})}>销毁 Test</button>
        {this.state.show ? <Test childNum={this.state.num}/> : null}
      </div>
    )
  }
  componentDidMount(){
    console.log('did mount');
  }
}

export default App;


// initial state
// will mount
// render
// did mount

// should update
// will update
// render
// did update

//1.初始化,首次挂载
// constructor
// componentWillMount
// render
// componentDidMount

//2.更新阶段(state props 发生变化时触发)
// componentWillReceiveProps
// shouldComponentUpdate
// componentWillUpdate
// componentDidUpdate
