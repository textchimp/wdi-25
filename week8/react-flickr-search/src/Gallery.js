import React, {Component} from 'react';

class Gallery extends Component {
  render(){

    return (
      <div className="results">
        <h2>Search Results</h2>
        { this.props.images.map( url => <img src={url} key={url} /> ) }
      </div>
    );

  }
}

export default Gallery;
