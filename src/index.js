import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  //<CurrencyCalculator/>,
  //<MagicTable/>,
  //<Clock/>,//Name von Klasse "HTML Tag"
  document.getElementById('root')
);  
//<React.StrictMode>

//</React.StrictMode>,
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

