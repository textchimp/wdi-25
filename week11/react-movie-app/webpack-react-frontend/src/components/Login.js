import React, { Component } from 'react';

import axios from 'axios';

import Auth from '../auth';

export default class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      errors: '',
      email: '',
      password: ''
    };

    this._setEmail = this._setEmail.bind( this );
    this._setPassword = this._setPassword.bind( this );
    this._submitLogin = this._submitLogin.bind( this );

  }

  _submitLogin(e){
    e.preventDefault();
    const {email, password} = this.state;  // ES6 destructuring
    console.log('_submitLogin()', {email, password});

    Auth.postLogin(email, password)
    .then( response => {
      console.log('response:', response);
      if( response.status === 201 && response.data.jwt ){

        // SUCCESS! Got a JWT token
        console.log('%c LOGIN SUCCESS', 'font-size: 14pt; color: green');

        axios.defaults.headers.common['Authorization'] = 'JWT ' + response.data.jwt;

        if( window.localStorage ){
          localStorage.setItem('authToken', response.data.jwt);
        }

        //
        // axios.get('http://localhost:3000/')
        // .then( response => console.log('/users response:', response) );
        //

        this.props.history.push( '/search' );

      } else {
        this.setState({ error: 'Error logging in. Please check your credentials.' });
      }

    })
    .catch( err => {
      console.log(err);
      this.setState({errors: 'Unrecognised email or password. Please try again.' });
    });

  }

  _setEmail(e){
    this.setState({ email: e.target.value });
  }

  _setPassword(e){
    this.setState({ password: e.target.value });
  }

  render(){
    return (
      <div>
        <form onSubmit={ this._submitLogin }>
          <input type="text" onChange={ this._setEmail  } placeholder="Email" /><br />
          <input type="password" onChange={ this._setPassword  } placeholder="Password" /><br />
          <button>Login</button><br />
          <div className="login-error">{ this.state.errors }</div>
        </form>
        <pre>{ JSON.stringify(this.state, null, 4) }</pre>
      </div>
    );
  }

}
