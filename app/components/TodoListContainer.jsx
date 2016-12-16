/**
 * Created by leonardli on 11/24/16.
 */
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {fetchTodos, addTodo, completeTodo} from "../../client/actions/todosActions";

class TodoListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todoIds: []
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchTodos())
  }

  addClickHandler = () => {
    this.props.dispatch(addTodo({content: this._input.value}))
  };

  completeClickHandler = (id) => {
    this.props.dispatch(completeTodo({id}))
  };

  render() {
    return (
      <div>
        {this.props.todos.toArray().map(todo => {
          return (
            <div key={todo.get('id')}>
              {todo.get('content')}
              <span onClick={this.completeClickHandler.bind(this, todo.get('id'))}> X </span>
            </div>)
        })}
        <input
          type="text"
          ref={node => this._input = node}
        />
        <button onClick={this.addClickHandler}>Add</button>
      </div>
    )
  }
}

export default connect(state => ({todos: state.todos}))(TodoListContainer);