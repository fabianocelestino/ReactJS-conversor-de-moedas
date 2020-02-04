import React, { Component } from 'react';
import { render } from 'react-dom';
import Conversor from './components/Conversor';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="App">

        <h1>Conversor de moedas</h1>
        <div className="row">
          <Conversor moedaA="USD" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="USD" />
        </div>
          
        
        <div className="row">
          <Conversor moedaA="BTC" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="BTC" />
        </div>
        
        
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
