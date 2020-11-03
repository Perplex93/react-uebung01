import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import{BrowserRouter as Router, Route} from 'react-router-dom';

import CurrencyCalculator from './pages/CurrencyCalculator/CurrencyCalculator';
import Clock from './pages/Clock/Clock';
import MagicTable from './pages/MagicTable/MagicTable'

function App() {
  return (
    <Router>
      <Route path='/' component={Clock}/>
      <Route path={['/CurrencyCalculator', '/CurrencyCalculator/:currency1/:currency2']} exact component={CurrencyCalculator} />
      <Route path={['/Table', '/MagicTable']} component={MagicTable} />
    </Router>
  );
}

export default App;
