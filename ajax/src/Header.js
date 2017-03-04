import React from 'react';
import axios from 'axios';

class Header extends React.Component {
  constructor() {
    super();
    this.state={
      accesstoken:'',
      user:null
    }
  }
  componentWillMount(){
    this.setState({user:JSON.parse(localStorage.getItem('user') || '{}')})
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:this.state.accesstoken})
    // .then(res=>console.log(res))
      .then(res=>{
        this.setState({user:res.data,isLogin:true});
        localStorage.setItem('user',JSON.stringify(res.data))
      })
      .catch(err=> alert('登录失败'))
  }
  handleLogout(){
    this.setState({user:{}});
    localStorage.setItem('user',JSON.stringify({}))
  }
  render(){
    return(
      <div>
        {this.state.user.id ?
          <div>
            <span>欢迎登录:<Link to={`user/${item.id}`}> {this.state.user.loginname} </Link></span>            
            <button onClick={this.handleLogout.bind(this)}>退出</button>
          </div> :
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor='accesstoken'>accesstoken</label>
            <input id='accesstoken' name='accesstoken' value={this.state.accesstoken} onChange={e=>this.setState({accesstoken:e.target.value})}/>
            <button>登录</button>
          </form>
        }
      </div>
    )
  }
}

export default Header;
