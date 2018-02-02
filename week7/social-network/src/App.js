import React, { Component } from 'react';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile
          name="Grouch Marx"
          age="deceased"
          bio="I once shot an elephant in my pyjamas..."
          pic="http://fillmurray.com/201/299"
        />
        <Profile
          name="Bill Murray"
          age="67"
          bio="No gods no masters"
          pic="http://fillmurray.com/199/301"
        />
      </div>
    );
  }
}

export default App;
