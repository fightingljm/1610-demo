import React from 'react';

import Checkbox from './Checkbox.js'

class Form extends React.Component {
  constructor() {
    super();
    this.state={
      inputValue:'',
      textarea:'',
      select:'',
      radio:'famale'
    }
  }
  handleSubmit(e){
    e.preventDefault();
    //ajax
    this.refs.form.reset()
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({inputValue:e.target.value})
  }
  handleTextarea(e){
    console.log(e.target.value);
    this.setState({textarea:e.target.value})
  }
  handleSelect(e){
    console.log(e.target.value);
    this.setState({select:e.target.value})
  }
  render(){
    return(
      <div>
        <form action='http://blog.duopingshidai.com' method='POST'
        onSubmit={this.handleSubmit.bind(this)} ref='form'>

          {/* 受控输入框 */}
          {/* <input type='text' defaultValue='123'/> */}
          <input type='text' value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}/>
          <button>提交</button> {/* 默认提交 */}
          {/* <button type='button'>普通</button>
          <button type='reset'>重置</button> */}

          <br/>
          <br/>{/* 受控评论框 */}
          <textarea value={this.state.textarea}
          onChange={this.handleTextarea.bind(this)}/>

          <br/>{/* 受控下拉菜单 */}
          <select value={this.state.select} onChange={this.handleSelect.bind(this)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

          <br/>{/* 非受控单选按钮 */}
          <input type='radio' name='test1' value='male'/>男
          <input type='radio' name='test1' value='famale' defaultChecked/>女

          <br/>{/* 受控单选按钮 */}
          <input type='radio' name='test2' value='male'
            checked={this.state.radio==='male' ? true : false}
            onChange={(e)=>this.setState({radio:e.target.value})}/>男
          <input type='radio' name='test2' value='famale'
            checked={this.state.radio==='famale' ? true : false}
            onChange={(e)=>this.setState({radio:e.target.value})}/>女

          <br/>
          <Checkbox/>
        </form>
      </div>
    )
  }
}

export default Form;
//value 输入不了了
//两种:
//1.受控组件onChange,state 控制 value
//2.非受控组件defaultValue,不可设置 value
