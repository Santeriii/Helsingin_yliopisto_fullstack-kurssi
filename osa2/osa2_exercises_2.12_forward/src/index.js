import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let index = 0

let generateKey = () => {
  index++
}

ReactDOM.render(<App key={generateKey}/>, document.getElementById('root'))