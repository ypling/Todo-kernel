/**
 * Created by ypling on 10/25/16.
 */

import TodoItem from "../types/TodoItem";

export function addTodo({content}, {db}) {
  let item = db.addItem(content);
  return new TodoItem(item);
}

export function completeTodo({id}, {db}) {
  db.completeItem(id);
  return id;
}
