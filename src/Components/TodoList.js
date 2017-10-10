import React, { Component } from 'react';

class TodoList extends Component {
    render () {
        return  (
		<div>
            <ul>
                {this.props.todo_data.map((todo, i) => <li key={i}>{todo}</li>)}
            </ul>
	</div>
        )
    }
}

export default TodoList;
