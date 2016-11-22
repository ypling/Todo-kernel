/**
 * Created by ypling on 10/25/16.
 */
let _todoStore = {};
let _lastId = 1;

export function getList(){
  return Object.keys(_todoStore).filter(id=>_todoStore[id]).map(id =>{
    return {
      id,
      content:_todoStore[id]
    };
  });
}

export function addItem(content){
  let id = _lastId;
  _lastId++;
  _todoStore[id] = content;
  return {id, content}
}

export function completeItem(id){
  _todoStore[id] = undefined;
}
