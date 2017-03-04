import React from 'react';
import axios from 'axios';
import Back from './Back';
import './main.css';

class Blog extends React.Component {
  constructor() {
    super();
    this.state={
      blog:{}
    }
  }
  componentWillMount(){
    axios.get('https://cnodejs.org/api/v1/topic/'+this.props.params.id)
      .then(res => this.setState({blog:res.data.data}))
  }
  render(){
    // console.log(this.props);
    return(
      <div>
        {/* {this.state.blog.content} */}
        {/* <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} /> */}
        {/* <button onClick={this.handleClick.bind(this)}>返回首页</button> */}
        <Back/>
        <div dangerouslySetInnerHTML={{__html: this.state.blog.content}} className='blog'/>
      </div>
    )
  }
}

export default Blog;
