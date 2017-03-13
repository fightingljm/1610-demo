import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      user:[]
    }
  }
  handleClick(e){
    e.preventDefault();
    console.log('handleClick......');
    axios.get('http://localhost:3000/users/58c36f80e40c622018b539eb')
      .then(respons => {
        console.log(respons);
        this.setState({user:respons.data.user})
      })
  }
  render(){
    return(
      <div>
        <div onClick={this.handleClick.bind(this)}>
          啦啦啦
        </div>
        <div>
          username:
          {this.state.user.username}
        </div>
      </div>
    )
  }
}

export default App;
