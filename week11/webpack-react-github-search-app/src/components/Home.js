import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  render(){
    return (
      <div>
        <h1>GitHub Search</h1>
        <Link to="/search">   {/*  Like <%= link_to search_path %> in Rails  */}
          <button>Search for a user</button>
        </Link>
        <button>Random user profile</button>
      </div>
    );
  }

}
