import React, { Component } from 'react';
import Calculator from './calculator';
import './app.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Calculator">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;