import React, {Component} from 'react';
import SearchForm from './SearchForm';
import jsonp from 'jsonp-es6';

class FlickrSearch extends Component {


  fetchImages( query ){
    console.log('phoned home with:', query);

    const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json'
    };


    const generateURL = function( p, size = 'q' ){
      return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_${size}.jpg`;
    };

    const processResults = function( results ){
      // console.log( results );

      // results.photos.photo.forEach(function( photo ){
      //   console.log( generateURL(photo) );
      // });

      const urls = results.photos.photo.map(function( photo ){
        return generateURL(photo);
      })

      console.log( urls );


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
      </div>
    );
  }

}

export default FlickrSearch;
