import React, { Component } from 'react';

class Clickr extends Component {

  constructor(props){
    super(props);

    console.log('new Clickr component created', this.props);

    this.state = {
      clicks: 0
    };

    // Fix the value of 'this' inside the _incrementClicks method to be
    // the same value as it is right now, inside the constructor()
    // method, i.e. the current object, the instance of Clickr
    this._incrementClicks = this._incrementClicks.bind( this );
  }

  _incrementClicks(){
    console.log('clicked! before setState', this.state.clicks );
    // No changing state directly! i.e. this.state.props += 1;
    // We always have to use this.setState()

    let newClicks = this.state.clicks + 1;

    this.setState({
      clicks: newClicks // asynchronous!
    });

    // console.log('clicked! after setState', this.state.clicks ); // same value as before this.setState()

    this.props.everyClick( newClicks );

  }

  render(){
    return (
      <button onClick={ this._incrementClicks }> {this.state.clicks} clicks so far </button>
    );
  }
}

export default Clickr;
