import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/tasks.js';

import Task from './Task';

class App extends Component {

  constructor( props ){
    super( props );  // Component::constructor( props )

    this.state = {
        hideCompleted: false,
        test: 'string'
    };

  }

  toggleHideCompleted(){
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }

  renderTasks(){

    let filteredTasks = this.props.tasks;

    if( this.state.hideCompleted ){

      filteredTasks = filteredTasks.filter( task => !task.checked );

      // filteredTasks = filteredTasks.filter(function(task){
      //   return !task.checked;
      // });

      // The old way:
      // let filtered = [];
      // for( let i = 0; i < filteredTasks.length; i++ ){
      //   let task = filteredTasks[i];
      //   if( task.checked !== false ){
      //     filtered.push( task );
      //   }
      // }


    }

    return filteredTasks.map( task => (
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
          <h1>Todo List WDI25 ({ this.props.incompleteCount })</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={ this.state.hideCompleted }
              onClick={ this.toggleHideCompleted.bind(this) }
            />
            Hide Completed Task
          </label>


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
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count()
  };
})(App);
