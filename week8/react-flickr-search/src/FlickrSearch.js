import React, {Component} from 'react';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import jsonp from 'jsonp-es6';

class FlickrSearch extends Component {

  constructor(){
    super();

    this.state = {
      images: []
    };

    this.fetchImages = this.fetchImages.bind( this );
  }

  fetchImages( query ){
    console.log('phoned home with:', query);
    console.log('fetchImages this: ', this );

    const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json'
    };


    const generateURL = function( p ){
      return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
    };


    let processResults = (results) => {

      console.log( 'processResults this:', this );

      // results.photos.photo.forEach(function( photo ){
      //   console.log( generateURL(photo) );
      // });

      // const urls = results.photos.photo.map(function( photo ){
      //   return generateURL(photo);
      // })
      // ...becomes:
      // const urls = results.photos.photo.map( (photo) => { return generateURL(photo); } );
      // ...becomes:
      // const urls = results.photos.photo.map( photo => generateURL(photo) );

      const urls = results.photos.photo.map( generateURL );

      this.setState({ images: urls });

    };

    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'})
    .then( processResults );

    // Flashback:
    // $.ajax().done(function( data ){
    //   console.log( data );
    // });


  }

  render(){
    return (
      <div>
        <h1>Flickr Search</h1>
        <SearchForm onSubmit={ this.fetchImages } />
        { /* !!this.state.images.length && <Gallery images={ this.state.images } /> */ }
        {
          this.state.images.length ?
          <Gallery images={ this.state.images } />
          :
          <p><em>Please enter a search term above...</em></p>
        }
      </div>
    );
  }

}

export default FlickrSearch;
