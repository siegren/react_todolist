import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm.js';
import TodoList from './Components/TodoList.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      todos: ['watch ', 'eat'],
      search: ['watch','eat']
    }
  }

  addNewTodo(todo){
    console.log(todo)
    this.setState({
      todos: this.state.todos.concat(todo)
    });
      this.setState({
        search: this.state.search.concat(todo)
      });
  }

  search(event){
var items= this.state.todos;
var filterItems = items.filter(function(todo){
  return todo.includes(event.target.value);
});
this.setState({
  search: filterItems
})
  }


  render() {
    return (
      <div>
      <h1> my Todos </h1>
      <TodoForm addNewTodoFunc={this.addNewTodo.bind(this)}/>
      <TodoList todo_data={this.state.search}/>
      <input placeholder="search...." onChange={(event) => this.search(event)}/>
      </div>
    );
  }
}

export default App;
