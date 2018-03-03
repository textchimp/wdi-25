console.log('hello cruel wœrld');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';

import Search from './components/Search';
import Login from './components/Login';
import MovieDetails from './components/MovieDetails';

class App extends Component {

  componentWillMount(){
    const token = localStorage.getItem('authToken');
    if( token ){
      axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
    }
  }

  render(){
    return (
      <Router>
        <div className="container">
          <h1>Movie Database App: Movir</h1>
           <Route exact path="/" component={ Search } />
           <Route path="/search" component={ Search } />
           <Route path="/login" component={ Login } />
           <Route path="/movie/:id" component={ MovieDetails } />
        </div>
      </Router>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app') );
