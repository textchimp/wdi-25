import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SearchResults from './SearchResults';

export default class Search extends Component {

  constructor(props){
    super(props);

    this.state = {
      query: ''
    };

    this._handleSubmit = this._handleSubmit.bind( this );
    this._handleChange = this._handleChange.bind( this );
  }

  _handleSubmit(e){
    e.preventDefault();
    console.log('sumbmit');
    // route to search results page: /search/keyword

    this.props.history.push(`/search/${ this.state.query }`);

  }

  _handleChange(e){
    this.setState({ query: e.target.value });
  }

  render(){
    return (
      <div>
      <p>You typed: { this.state.query }</p>
      <form onSubmit={ this._handleSubmit }>
        <input type="search" onChange={ this._handleChange } />
        <button>Search</button>
      </form>
      <br />
      {/* }<Route path={`${this.props.match.url}/:query`} component={ SearchResults } /> */ }
      </div>
    );
  }

}
