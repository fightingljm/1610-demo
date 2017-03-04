import React from 'react';
import axios from 'axios';
import $ from 'jquery'
import {Link} from 'react-router'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get('https://cnodejs.org/api/v1/topics')
      .then(res=> this.setState({data:res.data.data}))
  }
  render(){
    // console.log(this.state.data);
    let blog = this.state.data.map(item=>
      <div key={item.id}>
        <img src={item.author.avatar_url}/>
        <Link to={`blog/${item.id}`}>{item.title}</Link>
        {/* <a href={`https://cnodejs.org/topics/${item.id}`} target='_blank'></a> */}
        <span>浏览量:{item.visit_count}</span>
      </div>
    )
    return(
      <div>
        {blog}
      </div>
    )
  }
}

export default App;
