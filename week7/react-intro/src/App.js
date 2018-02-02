import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloUser name="Bill" />
        <HelloUser name="Milo" />
        <HelloUser name="Grant" />
      </div>
    );
  }
}

export default App;
