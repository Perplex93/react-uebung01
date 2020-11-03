import React, { Component } from 'react';
import CurrencyInput from './CurrencyInput';

class CurrencyCalculator extends React.Component {
    constructor(props){
    super(props);
    this.state = {currency: 'Euro', value: ''};
    this.handleEuroChange = this.handleEuroChange.bind(this);
    this.handleDollarChange = this.handleDollarChange.bind(this);
    }
  
    handleDollarChange(value) {
      this.setState({currency: 'Dollar', value});
    }
  
    handleEuroChange(value) {
      this.setState({currency: 'Euro', value});
    }
  
    render() {
      const value = this.state.value;
      const currency = this.state.currency;
      let euro = 0;
      let dollar = 0;
      if(currency === "Euro") {
        euro = value;
        dollar = 1.13*value;
      }
      else{
        dollar = value;
        euro = 0.88*value;
      }
      return (
        <div>
          <CurrencyInput currency="Euro" value = {euro} onCurrencyChange={this.handleEuroChange}/>
          <CurrencyInput currency="Dollar" value = {dollar} onCurrencyChange={this.handleDollarChange}/>
          <h1>Currency1: {this.props.match.params.currency1}</h1>
          <h1>Currency2: {this.props.match.params.currency2}</h1>
        </div>
      );
    }
  }

  export default CurrencyCalculator;
  