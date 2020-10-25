import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BodyLeft from "./BodyLeft";
import BodyMiddle from "./BodyMiddle";
import BodyRight from "./BodyRight";

ReactDOM.render(
  <>
    <App />
    <div className="body_alignment">
      <BodyLeft />
      <BodyMiddle />
      <BodyRight />
    </div>
    
  </>,
  document.getElementById('root')
);