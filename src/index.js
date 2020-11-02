import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

//Clock Klasse die von React Komponente erbt
class Clock extends React.Component {
  constructor(props) { 
    super(props); //Die props werden der Super Klasse React.Component übergeben
    this.state = {date: new Date()}; 
    //state ist ein zustand von react der sinnvoll ist  
    //hier kommt alles rein was aktualisiert werden könnte
    //deshalb packt man das in ein Javascript Objekt rein 
    //date ist der key new Date ist die Variable
  }

  componentDidMount(){ //DidMount wenn geladen wurde
    this.ticker = setInterval(()=> this.tick(), 1000);
    //ein Intervall was eine Funktion ausführt, 1000 ist eine Sekunde
  }

  componentWillUnmount(){ //Intervall wird aufgeräumt wenn es nicht mehr angezeigt wird
    clearInterval(this.ticker); //ticker wird gelöscht
  }

  tick() {
    this.setState({ //setState bearbeitet die Methoden wie zB DidMount...
      date: new Date() 
    });
  }

  render() { //Jede React Komponente muss gerendert werden
    return ( //Was in dieser Funktion angezeigt werden soll 
      <div>
        <h1>Aktuelle Uhrzeit: {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

class MagicButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {render: true};
  }
  
  deleteMe(){
    this.setState({
      render: false
    });
  }

  render() {
    if(this.state.render){
    return (
      <tr><td><button onClick={(e) => this.deleteMe()}>
        Delete Me
      </button></td></tr>
    );
    }
    else{
      return null;
    }
  }
}

class MagicTable extends React.Component {
  createTable(){
    let table = [];
    for(let i = 0; i < 10; i++) {
      let children = [];
      table.push(<tr><td><MagicButton/></td></tr>);
    }
    return table;
  }

  render(){
    return (
    <table>
      {this.createTable()}
    </table>);
  }
}

class CurrencyInput extends React.Component {
  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCurrencyChange(e.target.value);
  }

  render(){
    const currency = this.props.currency;
    const value = this.props.value;
    return(
      <fieldset>
        <legend>Gib die Menge in {currency} an:</legend>
        <input value={value} onChange={this.handleChange}/>
      </fieldset>
    );
  }
}

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
      </div>
    );
  }
}

ReactDOM.render(
  <CurrencyCalculator/>,
  //<MagicTable/>,
  //<Clock/>,//Name von Klasse "HTML Tag"
  document.getElementById('root')
);  
//<React.StrictMode>
//    <App />
//</React.StrictMode>,
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

