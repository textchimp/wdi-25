import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props){
    super(props);

    this.state = {
      query: ''
    };

    this._handleChange = this._handleChange.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }

  _handleChange(e){
    // console.log(e.target.value);
    this.setState({ query: e.target.value });
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.history.push(`/details/${ this.state.query }`);
  }

  render(){
    return (
      <div>
      <h1>GitHub Search</h1>
      <h2>Search by username</h2>
      <form onSubmit={ this._handleSubmit }>
        <input type="search" onChange={ this._handleChange } />
        <button>Search { this.state.query && ('for ' + this.state.query) }</button>
      </form>
      </div>
    );
  }

}
