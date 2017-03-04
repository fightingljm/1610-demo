import React from 'react';

class Son extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render(){
    console.log(this.props.children);
    return(
      <div>
        Son
        {this.props.children}
      </div>
    )
  }
}

export default Son;
