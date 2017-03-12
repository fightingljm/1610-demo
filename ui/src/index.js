import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import Material from './Material'
// import Antd from './Antd'
import './main.css'
// import 'antd/dist/antd.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Material/>
  ,document.getElementById('app')
)
