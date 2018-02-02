import React, {Component} from 'react';
import Clickr from './Clickr';

class HistoryEraser extends Component {
  constructor() {
    super();

    this.state = {
      historyStillExists: true
    };

    this.maybeEraseHistory = this.maybeEraseHistory.bind( this );
  }

  // The child component Clickr gets this maybeEraseHistory() method passed in
  // to it as a prop, and runs it like this:
  // this.props.everyClick( this.state.clicks );

  // In other words, maybeEraseHistory( this.state.clicks );

  maybeEraseHistory( clickCount ){
    console.log('clickCount: ', clickCount);
    console.log('erase history!', this.state.historyStillExists);

    if( clickCount === 4 ){
      this.setState({
        historyStillExists: false
      });
    }

  }

  render(){
      return (
        <div style={ {backgroundColor: this.state.historyStillExists ? '#ccc' : 'red' } }>
          <h1>HISTORY ERASER BUTTON!</h1>
          <Clickr everyClick={ this.maybeEraseHistory } />
          { this.state.historyStillExists || <h1>YOU FOOL, YOU ERASED HISTORY!</h1> }
        </div>
      );
  }
}

export default HistoryEraser;
