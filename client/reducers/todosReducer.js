import * as actionTypes from "../constants/actionTypes";
import Immutable from "immutable";
export default function (state = Immutable.OrderedMap({}), action) {
  let newState;
  switch (action.type) {
    case actionTypes.GET_TODOS:
      newState = state;
      action.todos.forEach(todo => {
        newState = newState.set(todo.id, Immutable.Map(todo));
      });
      return newState;
    case actionTypes.ADD_TODO:
      return state.set(action.id, Immutable.Map(action.todo));
      break;
    case actionTypes.COMPLETE_TODO:
      return state.delete(action.id);
      break;
    default:
      return state;
      break;
  }
}