import React from 'react';
import ReactDOM from 'react-dom';

// console.log(ReactDOM.render)
// //ReactDOM.render 是 React 的最基本方法,用于将模板转为 HTML 语言,并插入指定的 DOM 节点
//
// let name = 'ljm';
// let age = 4;
// let male = 1;
// let obj = {name:'ljm'};
// function add() {
//   return 6+8;
// }
//
// let a =
//   <div>
//     <h1>hello react</h1><br/>
//     {/*我是注释*/}
//
//     <h1>{name+'_^'}</h1>
//     <h1>年龄:{age*5}</h1>
//     <h1 className={male ? 'aaa' : 'bbb'}>性别:{male ? '男' : '女'}</h1>
//     <h1>{obj.name}</h1>
//     <h1>{add()}</h1>
//     {/*<h1>这里是找不到的变量{bbb}</h1>*/}
//     {/*大括号包裹的是js的变量,找不到会显示为空,不报错;待研究.*/}
//   </div>;
// //以上注释的形式是JSX语法
//
// ReactDOM.render(
//   a ,document.getElementById('app')
// )


//JSX 语法,允许我们在JS里直接去写标签
//特点:
//1 每个标签必须关闭;
//2  Adjacent JSX elements must be wrapped in an enclosing tag(JSA元素必需被包裹在一个完全封闭的标签内);
//3 注释的写法: {/*我是注释*/}
//4 我们可以在JSX语法内嵌入变量{obj},但是不能嵌入js语句;不支持if语句,但是支持三目运算符
//5 class 写为 className , tabindex 写为 tabIndex , for 写为 htmlFor
//6 JSX语法会被编译,通过React.createElement()方法

//component 组件(3种方式)  首字母要大写
//1  var Hello = React.createClass({})  es5的写法,过时不用
// console.log(React);//可以打印出React下的方法
// let Greeting = React.createClass({
//   render: function () {
//     return <h1>Hello</h1>
//   }
// })
// ReactDOM.render(
//   <Greeting></Greeting> ,document.getElementById('app')//自定义的标签不会被渲染,会去找返回值
// )

// //2
// function Greeting() {
//   return (<h1>Hello</h1>)
// }
// ReactDOM.render(
//   <Greeting></Greeting> ,document.getElementById('app')
// )

//3
// class Hello extends React.Component {
//   render(){
//     return(
//       <div>
//          <h1>hello react</h1><br/>
//          <h2>略略略</h2>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <Hello></Hello> ,document.getElementById('app')
// )


import App from './App';
import './main.css'  //You may need an appropriate loader to handle this file type.


ReactDOM.render(
  <App/> ,document.getElementById('app')
)
