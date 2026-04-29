import './TodoItem.css';
import type { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  onCheck : (targetId:number) => void;
  onDelete : (targetId: number) => void;
}

const TodoItem = ({todo,onCheck,onDelete}:TodoItemProps) => {
  const onChageInput = () => {
    onCheck(todo.id);
  }
    const onDeleteBtn = () => {
    onDelete(todo.id);
  }
  return(
    <div className="TodoItem">
        {/* <h4>TodoItem</h4> */}
        <div className="checkbox_col">
          <input 
            type="checkbox" 
            checked={todo.isDone} 
            onChange={onChageInput}/>
        </div>
        <div className="title_col">
          {todo.content}
        </div>
        <div className="date_col">
          {new Date(todo.createDate).toLocaleDateString()}
          </div>
        <div className="btn_col">
          <button onClick={onDeleteBtn}>삭제</button>
        </div>
    </div>
  );
};

export default TodoItem;