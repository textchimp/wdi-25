import React, {PureComponent} from 'react';

class HelloUser extends PureComponent {
  render(){
    console.log(this.props);
    return (
      <h2>Hello, { this.props.name }</h2>
    );
  }
}

export default HelloUser;
