import React from 'react';

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state={
      checkboxValue:[]//数组是存放被选中的多选框的
    }
  }
  handleChange(e){
    let cbValue = this.state.checkboxValue;//先拿到存放被选中多选框的数组
    let nowValue = e.target.value;//再拿到被点击的多选框的value
    let index = cbValue.findIndex(element=>element===nowValue)
    //findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
    if(index===-1){
      cbValue.push(nowValue)
    }else{
      cbValue.splice(index,1)
    }
    this.setState({checkboxValue:cbValue})
  }
  render(){
    console.log(this.state.checkboxValue);
    return(
      <div>
        {/* <input type='checkbox' value='apple' name='fruits' defaultChecked/>苹果 */}
        {/* <input type='checkbox' value='apple' name='fruits'
          onChange={e=>console.log(e.target.value)}/>苹果 */}
        <input type='checkbox' value='apple' name='fruits'
          onChange={this.handleChange.bind(this)}/>苹果

        <input type='checkbox' value='banana' name='fruits'
          onChange={this.handleChange.bind(this)}/>香蕉

        <input type='checkbox' value='pear' name='fruits'
          onChange={this.handleChange.bind(this)}/>梨子

      </div>
    )
  }
}

export default Checkbox;
