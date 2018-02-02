import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props); // call constructor() of the parent class, Component

    console.log(this.props);

    this.state = {
      imageHeight: 200
    }

    this.updateHeight = this.updateHeight.bind( this );
  }

  updateHeight( event ){
    console.log('typed!', event.target.value );

    if( event.target.value.length >= 3 ){
      this.setState({
        imageHeight: event.target.value
      });
    }

  }

  render(){
    const {name, age, bio, pic} = this.props;
    // this.props = {name: 'bill murray', age: 67};
    // name = 'bill murray'
    // age = 67
    return (
      <div className="profileContainer">
         <h1>{ name }</h1>
         <h2>Age: { age }</h2>
         <p>Biography: { bio }</p>
         <img src={ `http://fillmurray.com/600/${ this.state.imageHeight }` } alt={ name } />
         <p>Image width: { this.state.imageHeight } </p>
         <br />
         <input onChange={ this.updateHeight } />
         <hr />
      </div>
    );
  }
}

export default Profile;
