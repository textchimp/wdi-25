import React, {Component} from 'react';

class SecretsForm extends Component {
  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind( this );
  }

  _handleSubmit( e ){
    e.preventDefault();
  }

  _handleChange( e ){
    console.log(e.target.value);
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange }></textarea>
        <br />
        <input type="submit" value="Spill Ya Guts" />
      </form>
    )
  }
}

export default SecretsForm;
