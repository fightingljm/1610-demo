import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App'
import Router from './routes'
ReactDOM.render(
  <Router/>
  ,document.getElementById('app')
)

// //多级传递用 context
// class Grandp extends React.Component {
//   getChildContext(){
//     return {color:'purple'}
//   }
//   render(){
//     return(
//       <div>爷爷
//         <Father/>
//       </div>
//     )
//   }
// }
// Grandp.childContextTypes = {
//   color:React.PropTypes.string
// }
//
// class Father extends React.Component {
//   render(){
//     return(
//       <div>爸爸
//         <Son/>
//       </div>
//     )
//   }
// }
//
// class Son extends React.Component {
//   render(){
//     return(
//       <div>儿子
//         {this.context.color}
//       </div>
//     )
//   }
// }
// Son.contextTypes = {
//   color:React.PropTypes.string
// }
//
// ReactDOM.render(
//   <Grandp/>
//   ,document.getElementById('app')
// )


// //获取未知图片大小
// function getStyle(obj,attr) {
//   if(obj.currentStyle){
//     return obj.currentStyle[attr]
//   }else{
//     return getComputedStyle(obj,false)[attr]
//   }
// }
// var img = new Image();
// img.addEventListener('load',function () {
//   document.body.appendChild(img);
//   console.log(getStyle(img,'width'));
//   document.body.removeChild(img)
// },false)
// img.src = 'https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg'
