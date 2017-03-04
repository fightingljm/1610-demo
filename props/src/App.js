// //Btn复用
// import React from 'react';
//
// import Btn from './Btn';
//
// class App extends React.Component {
//   render(){
//     return(
//       <div>
//         <Btn/>
//         <Btn title='Primary' col='#fff' bgc='#337ab7' bdc='#2e6da4'/>
//         <Btn title='Success' col='#fff' bgc='#5cb85c' bdc='#4cae4c'/>
//         <Btn title='Info' col='#fff' bgc='#5bc0de' bdc='#46b8da'/>
//         <Btn title='Warning' col='#fff' bgc='#f0ad4e' bdc='#eea236'/>
//         <Btn title='Danger' col='#fff' bgc='#d9534f' bdc='#d43f3a'/>
//       </div>
//     )
//   }
// }
//
// export default App;



//卡片复用
import React from 'react';

import Card from './Card';
import Btn from './Btn';

let date = [
  {index:1,title:'标题一',date:'2017.1.12'},
  {index:2,title:'标题二',date:'2017.1.13'},
  {},
  {index:4,title:'标题四',date:'2017.1.15'}
]
class App extends React.Component {
  constructor() {
    super();
    this.state={
      date,
      num:0
    }
  }
  addNum(val){
    this.setState({num:this.state.num+val})
  }
  render(){
    return(
      <div>
        {
          this.state.date.map(item => <Card key={Math.random()} {...item}/>)
        }
        <Btn bgc='#f0ad4e'/>
        {/*以上写法会报一条警告,因为 Btn.js 里边的 `add: React.PropTypes.func.isRequired`*/}

        数字是: {this.state.num}<br/>
        <Btn bgc='#5bc0de' add={this.addNum.bind(this)}/>
        {/*父组件给子组件传递一个 add 方法,这个 add 方法来自父组件的 addNum 方法*/}


        <Btn bgc='#f0ad4e' add={this.addNum.bind(this)} count={5} title='+5'/>
        <Btn bgc='#f0ad4e' add={this.addNum.bind(this)} count={-10} title='-10'/>
      </div>
    )
  }
}

export default App;
