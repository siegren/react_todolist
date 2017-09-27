import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm.js';
import TodoList from './Components/TodoList.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      todos: ['watch ', 'eat']
    }
  }

  addNewTodo(todo){
    console.log(todo)
    this.setState({
      todos:this.state.todos.concat(todo)
    });
  }
  render() {
    return (
      <div>
      <h1> my Todos </h1>
      <TodoForm addNewTodoFunc={this.addNewTodo.bind(this)}/>
      <TodoList todo_data={this.state.todos}/>
      </div>
    );
  }
}

export default App;
