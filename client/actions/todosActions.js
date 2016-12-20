import request from '../request';
import * as querys from '../request/todos';
import * as actionTypes from '../constants/actionTypes';

export function fetchTodos() {
  return dispatch => {
    return request(querys.GetTodos).then(({todos}) => {
      dispatch({
        type: actionTypes.GET_TODOS,
        todos
      });
    })
  }
}

export function addTodo({content}){
  return dispatch => {
    return request(querys.AddTodo, {content}).then(({todo}) => {
      dispatch({
        type: actionTypes.ADD_TODO,
        id: todo.id,
        todo: todo
      });
    })
  }
}

export function completeTodo({id}){
  return dispatch => {
    return request(querys.CompleteTodo, {id}).then(({id}) => {
      dispatch({
        type: actionTypes.COMPLETE_TODO,
        id
      });
    })
  }
}