import React, {Component} from 'react';
import axios from 'axios';

import SecretsForm from './SecretsForm';

const SERVER_URL = 'http://localhost:3000/secrets.json'


function Gallery(props){
  return (
    <div>
      {
         props.secrets.map( s => <p key={ s.id }>{ s.content }</p> )
       }
    </div>
  );
}

class Secrets extends Component {

  constructor(){
    super();
    this.state = {
      secrets: []
    };

    this.saveSecret = this.saveSecret.bind( this );
  }

  saveSecret( secret ){
    // console.log('saveSecret: ', secret);

    // Rails:   Secret.create content: secret
    axios.post(SERVER_URL, { content: secret }).then( results => {
      this.setState({
        secrets: [results.data, ...this.state.secrets ]
      });
    });

  }

  componentWillMount(){

    // This code will ONLY run just before the component is about to be
    // mounted on the app, i.e. added to the DOM

    const fetchSecrets = () => {
      // Make AJAX request to our Rails API endpoint
      // ...and save the response into our component state
      axios.get(SERVER_URL).then( results => this.setState({secrets: results.data.reverse() }) );
      setTimeout( fetchSecrets, 1000 );
    };

    fetchSecrets();


  }

  render(){
    return (
      <div>
        <h1>Tell Us Your Secrets</h1>
        <SecretsForm onSubmit={ this.saveSecret } />
        <hr />
        <Gallery secrets={ this.state.secrets }/>
      </div>
    );
  }

}

export default Secrets;
