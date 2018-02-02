import React, {PureComponent} from 'react';

class HelloUser extends PureComponent {
  render(){
    console.log(this.props);
    return (
      <div>
      <h2>Hello, { this.props.name }</h2>
      <img src={ `http://fillmurray.com/${ this.props.imgWidth }/${ this.props.imgHeight }`  } />
      </div>
    );
  }
}

export default HelloUser;
