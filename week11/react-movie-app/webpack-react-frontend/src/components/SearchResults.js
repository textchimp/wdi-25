import React, { Component } from 'react';

import MovieAPI from '../utils';


const Result = function(props){

  const posterURL = "https://image.tmdb.org/t/p/w154" + props.data.poster_path;

  return (
    <div className="poster-thumbnail" onClick={ () => props.onclick( props.data.id ) }>
        <img src={posterURL} alt={ props.data.original_title } />
    </div>
  );
};

export default class SearchResults extends Component {

  constructor(props){
    super(props);

    this.state = {
      results: [],
      totalResults: 0,
      totalPages: 0
    };

    this.goToShowPage = this.goToShowPage.bind( this );
  }

  goToShowPage( id ){
    console.log('go to show page for movie ID:', id);
    this.props.history.push(`/movie/${ id }`);
  }

  getResults(){
    MovieAPI.getMovieSearchResults( this.props.match.params.query )
    .then( results => this.setState({
      results: results.data.results,
      totalResults: results.data.total_results,
      totalPages: results.data.total_pages
    }))
    .catch( error => console.error('API query error') );
  }

  componentDidUpdate( prevProps, prevState ){
    console.log('componentDidUpdate()');
    // INFINITE LOOP GOTCHA! If we run code in componentDidUpdate() which causes a setState(),
    // we will get stuck in an infinite loop of setState() -> componentDidUpdate() -> setState()
    // ...so we need to make sure not to keep setting state if nothing important has changed
    if( prevProps.match.url === this.props.match.url ){
      return;
    }

    this.setState({ results: [] });  // clear the old results, causing "Loading..." to display
    this.getResults();
  }

  componentWillMount(){
    console.log('SearchResults');
    this.getResults();
  }

  render(){

    // Handle the case where there are no search results yet
    // (because we have not yet received a response to our AJAX request)
    if( this.state.results.length === 0 ){
      return <em>Loading...</em>;
    }

    const resultList = this.state.results.map( result => (
      <Result
        key={ result.id }
        data={ result }
        onclick={ this.goToShowPage }
      />
    ));

    // const resultList = this.state.results.map(function( result ){
    //   return <Result data={ result }/>;
    // });


    return (
      <div>
      <h3>{ this.state.totalResults } Results for "{ this.props.match.params.query }":</h3>
      { resultList }
      </div>
    );

  }

}
