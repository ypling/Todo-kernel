/**
 * Created by leonardli on 11/24/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getTodos, addTodo, completeTodo} from '../../client/actions/todosActions';

class TodoListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todoIds: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getTodos()).then(todoIds => {
      this.setState({todoIds});
    });
  }

  addClickHandler = () => {
    this.props.dispatch(addTodo({content: this._input.value})).then(todoId => {
      this.setState({todoIds: this.state.todoIds.concat(todoId)});
    })
  };

  completeClickHandler = (id) => {
    this.props.dispatch(completeTodo({id}))
  };

  render() {
    return (
      <div>
        {this.state.todoIds.map(id => {
          if (this.props.todos.get(id)) {
            return (
              <div key={id}>
                {this.props.todos.getIn([id, 'content'])}
                <span onClick={this.completeClickHandler.bind(this, id)}> x </span>
              </div>)
          }
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