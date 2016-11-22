/**
 *
 * Created by ypling on 10/24/16.
 */
import {buildSchema} from "graphql";
import todos from '../query/todos';
import {completeTodo, addTodo} from '../mutation/todos';

export const schema = buildSchema(`
  type Query {
    todos(state: String): [TodoItem]
  }
  
  type Mutation {
    completeTodo(id: ID!):ID!
    addTodo(content: String!): TodoItem
  }
  
  # some description
  type TodoItem {
    id: ID!
    content: String!
  }
`);

export const root = {
  todos,
  completeTodo,
  addTodo
};