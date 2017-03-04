import React from 'react';
import Son from './Son'
import Test from './Test'
class Children extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render(){
    return(
      <div>
        Children
        <Son>
          <p>123</p>
          <p>123</p>
          <Test/>
          <Test/>
        </Son>
      </div>
    )
  }
}

export default Children;
