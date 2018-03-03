import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

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

    this.props.history.push(`${ this.props.match.url }/${ this.state.query }`);

  }

  _handleChange(e){
    this.setState({ query: e.target.value });
  }

  componentWillMount(){
    console.log('Search componentWillMount()');

    axios.get('http://localhost:3000/seekrit')
    .then( response => console.log('/users response:', response) );

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
      <Route path={`${ this.props.match.url }/:query`} component={ SearchResults } />
      </div>
    );
  }

}

const Checker = function(props){
  return <h4>CHECK</h4>;
};
