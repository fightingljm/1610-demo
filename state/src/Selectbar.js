import React from 'react'

import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'

class Selectbar extends React.Component {
  constructor() {
    super();
    this.state = {
      show : 0
    }
  }
  handleClick(num){
    this.setState({show : num})
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>选项卡一</button>
        <button onClick={this.handleClick.bind(this,1)}>选项卡二</button>
        <button onClick={this.handleClick.bind(this,2)}>选项卡三</button>
        <div style = {{width:'200px',border:'1px solid #ccc',backgroundColor:this.state.show===0 ? '#ccc' :
         this.state.show===1 ? 'red' : 'yellow'}}>
          {this.state.show===0 ? <Box1/> :
           this.state.show===1 ? <Box2/> : <Box3/>
          }
        </div>
      </div>
    )
  }
}
export default Selectbar;
