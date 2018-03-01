import React, { Component } from 'react';
import MovieAPI from '../utils';

export default class MovieDetails extends Component {

  constructor(props){
    super(props);

    this.state = {
      details: null,
    };
  }

  componentWillMount(){
    MovieAPI.getMovieDetails( this.props.match.params.id )
    .then( result => this.setState({ details: result.data }) )
    .catch( console.error );
  }

  render(){

    if( !this.state.details ){
      return <em>Loading...</em>;
    }

    // const {genres, original_title, tagline, overview} = this.state.details;

    const genres = this.state.details.genres.map( g => <span><a href={`/genres/${g.id}`}>{ g.name }</a> </span> );

    return (
      <div className="movie-details">
        <h2>{ this.state.details.original_title }</h2>
        <h4>{ this.state.details.tagline }</h4>
        <p>{ this.state.details.overview }</p>
        Genres: { genres }
        <br />
        <img src={ "https://image.tmdb.org/t/p/w500" + this.state.details.poster_path } />

      </div>
    );
  }

  }
