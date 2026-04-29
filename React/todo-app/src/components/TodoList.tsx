import './TodoList.css';
import TodoItem from './TodoItem';
import type { Todo } from '../App';
import { useState } from 'react';

interface TodoListProps {
  todos: Todo[];
  onCheck: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const TodoList = ({todos,onCheck,onDelete}:TodoListProps) => {
  const [search, setSearch] = useState<string>('');
  const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ''
    ? todos
    : todos.filter((todo)=>(todo.content.toLowerCase().includes(search.toLowerCase())))
  };
  /* searchs = searchs.filter((todos)=>(todos.content.includes(search))); */
  return(
    <div className="TodoList">
        {/* <h4>TodoList Component</h4> */}
        <h4>Todo List 🌱</h4>
        <input
          type="text"
          className="searchbar"
          placeholder="검색어를 입력하세요"
          onChange={onChangeSearch}
        />
        <div>
          {
            todos.map((todo)=>(
              <TodoItem todo={todo} key={todo.id} onCheck={onCheck} onDelete={onDelete}/>
            ))
          }
        </div>
    </div>
  );
};

export default TodoList;