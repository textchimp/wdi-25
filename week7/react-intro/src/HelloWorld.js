import React, {PureComponent} from 'react';

// const HelloWorld = function(){
//   // return React.createElement('h1', null, 'Hello World!');
//   // But instead of that.... JSX:
//   return (
//     <div className="bill">
//      <h1>Hello World!</h1>
//      <img src="http://fillmurray.com/300/200" />
//     </div>
//   );
// };

class HelloWorld extends PureComponent {
  render(){
    return (
      <div className="bill">
        <h1>Hello World!</h1>
        <img src="http://fillmurray.com/300/200" />
      </div>
    );
  }
}

export default HelloWorld;
