import React from 'react'

class RuanyfTrans extends React.Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  handleClick(){
    this.setState({show:!this.state.show})
  }
  render(){
    let style = {
      top:this.state.show ? '35%' : '10%',
      height:this.state.show ? '30vh' : '4.5vh',
      overflow:this.state.show ? 'auto' : 'hidden'
    }
    return(
      <div className='container' style = {style}>
        <button onClick={this.handleClick.bind(this)}>{this.state.show ? '上' : '下'}</button>
        <br/>
        <p>Jinmeng Liu 的个人网站<br/><a href="https://fightingljm.github.io/">https://fightingljm.github.io/</a></p>
        <hr/>
        <p className='select'> >> <a href="#">Blog</a> / <a href="#">Tweets</a> / <a href="#">About</a></p>
        <hr/>
        <p>博客标题</p>
      </div>
    )
  }
}
export default RuanyfTrans;
