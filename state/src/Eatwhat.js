import React from 'react'

let date = ['土豆','胡萝卜','豆干','牛奶','蛋挞']
class Eatwhat extends React.Component {
  constructor() {
    super();
    this.state = {
      start : false,
      date,
      text : ''
    }
  }
  select(){
    let result = this.state.date[Math.floor(Math.random()*this.state.date.length)];
    this.setState({text:result})
  }
  handleClick(){
    // this.setState({start:!this.state.start})
    if(this.state.start){
      //clearInterval
      //false
      clearInterval(this.interval)
      this.setState({start:false})
    }else{
      //计时器
      //true
      this.interval=setInterval(()=>this.select(),100);
      this.setState({start:true})
    }
  }
  render(){
    return(
      <div>
        <p>今天吃什么:{this.state.text}</p>
        <button onClick={this.handleClick.bind(this)}>{this.state.start ? '停止' : '开始'}</button>
      </div>
    )
  }
}
export default Eatwhat;
