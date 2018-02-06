import React, {Component} from 'react';
import PropTypes from 'prop-types';


class SecretsForm extends Component {
  constructor() {
    super();

    this.state = { content: '' };

    this._handleSubmit = this._handleSubmit.bind( this );
    this._handleChange = this._handleChange.bind( this );
  }

  _handleSubmit( e ){
    e.preventDefault();
    // console.log( this.state.content );
    this.props.onSubmit( this.state.content );
  }

  _handleChange( e ){
    this.setState({ content: e.target.value });
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

SecretsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SecretsForm;
