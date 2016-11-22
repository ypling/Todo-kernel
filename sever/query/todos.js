/**
 * Created by ypling on 10/25/16.
 */
import TodoItem from '../types/TodoItem';
export default function ({state}, {db}) {
  return db.getList().map(item => {
    return new TodoItem(item)
  })
}