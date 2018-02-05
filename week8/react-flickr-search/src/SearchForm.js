import React, {Component} from 'react';

class SearchForm extends Component {

  constructor(){
    super();

    this.state = {
      query: ''
    };


    this._handleInput = this._handleInput.bind( this );
    this._handleSubmit = this._handleSubmit.bind( this );
  }

  _handleSubmit( e ){
    e.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  _handleInput( e ){
    // NOT ALLOWED!
    // this.state.query = e.target.value;

    this.setState({ query: e.target.value });
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit } >
        <input type="search" placeholder="Dogs" onInput={ this._handleInput }  />
        <input type="submit" value="Search" />
      </form>
    );
  }

}

export default SearchForm;
