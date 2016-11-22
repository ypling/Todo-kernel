export default class TodoItem {
  constructor({id,content}) {
    this._id = id;
    this._content = content;
  }

  id() {
    return this._id;
  }
  
  content(){
    return this._content;
  }
}
