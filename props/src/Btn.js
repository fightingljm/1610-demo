import React from 'react';
import './main.css'
class Btn extends React.Component {
  // handleClick(){
  //   this.props.add(this.props.count)
  // }
  //handleClick 是点击事件绑定的方法,这个方法用来执行父组件传递过来的 add 方法
  render(){
    let styles = {
      color: this.props.col,
      backgroundColor: this.props.bgc,
      borderColor: this.props.bdc
    }
    return(
      <div>
        <p>我是子组件的button</p>
        {/*<button style={styles} className='btn' onClick={this.handleClick.bind(this)}>{this.props.title}</button>*/}
        <button style={styles} className='btn' onClick={()=>this.props.add(this.props.count)}>{this.props.title}</button>
      </div>
    )
  }
}
Btn.defaultProps={
  title:'Default',
  col: '#333',
  bgc: '#fff',
  bdc: '#ccc'
}

Btn.propTypes = {
  title:React.PropTypes.string,
  col: React.PropTypes.string,
  bgc: React.PropTypes.string,
  bdc: React.PropTypes.string,
  add: React.PropTypes.func.isRequired
};
export default Btn;
