import React, { Component } from 'react';

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

  export default Clock;