// import React from 'react';
// import axios from 'axios';
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state={
//       user:[]
//     }
//   }
//   handleClick(e){
//     e.preventDefault();
//     console.log('handleClick......');
//     axios.get('http://localhost:3000/users/58c36f80e40c622018b539eb')
//       .then(respons => {
//         console.log(respons);
//         this.setState({user:respons.data.user})
//       })
//   }
//   render(){
//     return(
//       <div>
//         <div onClick={this.handleClick.bind(this)}>
//           啦啦啦
//         </div>
//         <div>
//           username:
//           {this.state.user.username}
//         </div>
//       </div>
//     )
//   }
// }
//
// export default App;


import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      user:'',
      inputValue:'123'
    }
  }
  handleChange(e){
    this.setState({inputValue:e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.inputValue);
    axios.post('http://tiger.haoduoshipin.com/login',{
      username:`${this.state.inputValue}`
    })
      .then(respons => {
        console.log(respons);
        this.setState({user:respons.data.msg})
      })
  }
  render(){
    return(
      <div>
        <div>
          {this.state.user}
        </div>
        <form action='http://tiger.haoduoshipin.com/login' method='POST'
        onSubmit={this.handleSubmit.bind(this)} ref='form'>
          <input type='text' value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}/>
          <button>提交</button>
        </form>
      </div>
    )
  }
}

export default App;
