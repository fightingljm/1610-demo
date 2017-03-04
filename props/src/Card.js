import React from 'react';
import './main.css'
class Card extends React.Component {
  render(){
    console.log(this.props);
    return(
      <div className='card'>
        <div className='card-index'>{this.props.index}</div>
        <div className='card-desc'>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
  index:'Default',
  title:'这是默认的标题',
  date:'这是默认的日期'
}
export default Card;
