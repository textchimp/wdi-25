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
  }

  componentWillMount(){

    // This code will ONLY run just before the component is about to be
    // mounted on the app, i.e. added to the DOM

    const fetchSecrets = () => {
      // Make AJAX request to our Rails API endpoint
      // ...and save the response into our component state
      axios.get(SERVER_URL).then( results => this.setState({secrets: results.data }) );
    };

    fetchSecrets();
  }

  render(){
    return (
      <div>
        <h1>Tell Us Your Secrets</h1>
        <SecretsForm  />
        <hr />
        <Gallery secrets={ this.state.secrets }/>
      </div>
    );
  }

}

export default Secrets;
