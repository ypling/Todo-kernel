export const GetTodos = `
{
  todos {
    id
    content
  }
}`;

export const AddTodo = `
mutation AddTodo($content: String!){
  todo: addTodo(content: $content){
    id
    content
  }
}`;

export const CompleteTodo = `
mutation CompleteTodo($id: ID!){
  id: completeTodo(id:$id) 
}`;
