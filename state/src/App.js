// import React from 'react';
//
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       num : 1,
//       show : false
//     }
//   }
//   handleAdd(){
//     this.setState({num : this.state.num+1})
//   }
//   handleCut(){
//     this.setState({num : this.state.num-1})
//   }
  // handleFan(){
  //   this.setState({show : !this.state.show})
  // }
//   render(){
//     return(
//       <div>
//         数字是:{this.state.num}<br/>
//         <button onClick={this.handleAdd.bind(this)}>+1</button>
//         <button onClick={this.handleCut.bind(this)}>-1</button>
//         <button onClick={this.handleFan.bind(this)}>{this.state.show ? '隐藏' :'显示'}</button>
//         {/*<p>你现在显示吗 {this.state.show ? '显示' : '不显示'}</p>*/}
//         <p style = {{display:this.state.show ? 'block' : 'none'}}>你现在显示吗</p>
//       </div>
//     )
//   }
// }
//
// export default App;

// state
// 定义state
// constructor(){
//   super();
//   this.state = {
//     num : 1
//   }
// }
//
// 修改state
// this.setState({})
import React from 'react';

let date = ['这是第一条消息','这是第二条消息','这是第三条消息','hello world']

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text : date
    }
  }

  render(){
    // console.log(this.state.text);
    // let content = this.state.text.map( item => <p>今天的消息是:{item}</p>)
    let content = this.state.text.map( item => <div key = {Math.random()}>
      <p>今天的消息是:{item}</p><button>删除</button>
    </div>)
    // ` key = {Math.random()}`防止警告,加载最外层的标签上(这是React底层用到的,为了做底层计算的)
    return(
      <div>
        {/*{date} 因为 React 的行为,会遍历数组,以上写 content 的意思是让文本返回标签*/}
        {content}
      </div>
    )
  }
}

export default App;
