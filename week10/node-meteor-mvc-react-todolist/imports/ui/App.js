import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/tasks.js';

import Task from './Task';

class App extends Component {

  renderTasks(){
    return this.props.tasks.map( task => (
      <Task key={task._id} task={task} />
    ));
  }

  handleSubmit(event){
    event.preventDefault();

    const text = ReactDOM.findDOMNode( this.refs.textInput ).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date()
    });

     ReactDOM.findDOMNode( this.refs.textInput ).value = '';

  }

  render(){

    // return React.createElement('div', null, React.createElement('header'))

    return (
      <div className="container">
        <header>
          <h1>Todo List WDI25</h1>

          <form className="new-task" onSubmit={ this.handleSubmit.bind(this) } >
            <input
              type="text"
              ref="textInput"
              placeholder="Type here to add new tasks"
            />
          </form>

        </header>

        <ul>
         { this.renderTasks() }
        </ul>

      </div>
    );
  }

}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
  };
})(App);
