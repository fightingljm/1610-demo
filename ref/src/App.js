import React from 'react';
import Test from './Test'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      divH:50
    }
  }
  handleWheel(e){
    if(this.state.divH<50){
      this.setState({divH:100})
    }else{
      this.setState({divH:this.state.divH+e.deltaY})
    }
  }
  handleMenu(e){
    e.preventDefault();
    console.log('111');
  }
  componentDidMount(){
    // console.log(this.refs.aaa.getValue());
    // console.log(this.newAttr);
    // this.textInput.focus();
  }
  render(){
    return(
      <div>
        {/* <div ref={(aaa) => this.newAttr = aaa}>bbb</div>
        <input type='text' ref={input => this.textInput = input}/>
        <button id='btn4' onClick={()=> console.log(this.textInput.value)}>4</button>
        <button id='btn1'>1</button>
        <button id='btn2'>2</button> */}
        <button id='btn3' onClick={()=>this.refs.aaa.handleClick()}>3</button>
        <Test ref='aaa'/>
        <div style={{height:`${this.state.divH}px`,background:'#888'}}
          onWheel={this.handleWheel.bind(this)}
          onContextMenu={this.handleMenu.bind(this)}></div>
      </div>
    )
  }
}

export default App;
