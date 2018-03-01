console.log('hello cruel wœrld');

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Search from './components/Search';
import SearchResults from './components/SearchResults';
import MovieDetails from './components/MovieDetails';

const Routes = (
  <Router>
    <div className="container">
      <h1>Movie Database App: Movir</h1>
       <Route exact path="/" component={ Search } />
       <Route path="/search/:query" component={ SearchResults } />
       <Route path="/movie/:id" component={ MovieDetails } />
    </div>
  </Router>
);

ReactDOM.render( Routes, document.getElementById('app') );
