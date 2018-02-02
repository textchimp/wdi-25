import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloUser name="Bill" imgWidth="300" imgHeight="200"/>
        <HelloUser name="Milo" imgWidth="600" imgHeight="300"/>
        <HelloUser name="Grant" imgWidth="800" imgHeight="500"/>
      </div>
    );
  }
}

export default App;
