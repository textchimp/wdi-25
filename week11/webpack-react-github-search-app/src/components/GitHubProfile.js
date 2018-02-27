import React, { Component } from 'react';
import GitHub from '../utils';

export default class GitHubProfile extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: null,
      repos: null
    };

  }

  componentWillMount(){

    GitHub.getUserInfo( this.props.match.params.username )
    .then( response => this.setState({ user: response.data }) );

    GitHub.getUserRepos( this.props.match.params.username )
    .then( response => this.setState({ repos: response.data }) );

  }

  render(){
    return (
      <div>
        <h1>GitHub Search</h1>
        <h2>{ this.props.match.params.username } Profile</h2>
        <Stats user={ this.state.user } />
        <Repos repo_list={ this.state.repos }/>
      </div>
    );
  }

} // class GitHubProfile


class Repos extends Component {
  render(){

    if( this.props.repo_list === null ){
        return (<div className="repos">Loading...</div>);
    }

    const userRepos = this.props.repo_list.map( repo => {
      return (
        <li key={ repo.name }>
          <a href={ repo.html_url } target="_blank">{ repo.name }</a>
        </li>
      );
    });

    return (
      <div className="repos">
        <h3>User Repositories</h3>
        <ul>
          { userRepos }
        </ul>
      </div>
    );


  }
}


class Stats extends Component {
  render(){

    if( this.props.user === null ){
        return (<div className="profile">Loading...</div>);
    }

    const { login, followers, following, public_repos, public_gists } = this.props.user;
    // ^ ES6 destructuring on assignment:
    // 'login' will be set to this.props.user.login
    // 'following' will be set to this.props.user.following
    return (
      <div className="profile">
        <h3>Stats for {login}</h3>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repos: {public_repos}</p>
        <p>Gists: {public_gists}</p>
      </div>
    );
  }
}
