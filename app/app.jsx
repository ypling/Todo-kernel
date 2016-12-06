/**
 * Created by leonardli on 11/24/16.
 */
import React, {Component, PropTypes} from 'react';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import todos from '../client/reducers/todosReducer';
import TodoListContainer from './components/TodoListContainer';
const store = createStore(
  combineReducers({
    todos
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Provider store={store}>
        <TodoListContainer/>
      </Provider>
    )
  }
}

export default App;