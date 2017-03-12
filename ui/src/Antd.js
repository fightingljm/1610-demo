import React from 'react';
// import { DatePicker } from 'antd';
import DatePicker from 'antd/lib/date-picker'
import WrappedNormalLoginForm from './Form'

class Antd extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render(){
    return(
      <div>
        <DatePicker/>
        <WrappedNormalLoginForm/>
      </div>
    )
  }
}

export default Antd;
