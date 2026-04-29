import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import { useReducer, useRef } from 'react'

const mockupTodos = [
  {
    id:0,
    isDone: false,
    content:'Javascript',
    createDate: new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content:'AI',
    createDate: new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content:'React',
    createDate: new Date().getTime(),
  },
  {
    id:3,
    isDone: false,
    content: 'Typescript',
    createDate: new Date().getTime(),
  }
];

interface Todo {
  id:number;
  isDone:boolean;
  content:string;
  createDate:number;
}
//리눅스 타임 -> 1970 ~ 기준으로 0 

type Action =
| { act : 'create'; newItem : Todo }
| { act : 'update'; targetId : number }
| { act : 'delete'; targetId : number }

const reducer = (todos:Todo[], action:Action):Todo[] => {
  switch(action.act){
    case 'create':
      return [action.newItem,...todos]
    case 'update':
      return todos.map((todo)=>(
        todo.id === action.targetId ? {...todo, isDone : !todo.isDone} : todo
      ))
    case 'delete':
      return todos.filter((todo)=>(
        todo.id !== action.targetId
      ))
    default : return todos;
  }
};

function App() {
  //const [todos, setTodos] = useState<Todo[]>(mockupTodos);
  const idRef = useRef(4); //백엔드 : 발급 시점에 id를 발급 받는다던지
  const [todos, dispatch] = useReducer(reducer,mockupTodos);


/* 
  const onCreate = (content:string) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone:false,
      createDate: new Date().getTime(),
    };
    setTodos([newItem, ...todos]); //push -> 리랜더링이 안 됨
    idRef.current += 1;
  };
  
  const onCheck = (targetId:number) => {
    setTodos(
      todos.map((todo)=>(
        todo.id === targetId ? {...todo, isDone : !todo.isDone} : todo
      ))
    )
  };

  const onDelete = (targetId: number) => {
    setTodos(
      todos.filter((todo)=>(
        todo.id !== targetId
      ))
    );
  };
 */
  const onCreate = (content:string) => {
  const newItem = {
    id: idRef.current,
    content,
    isDone:false,
    createDate: new Date().getTime(),
    };
    dispatch({act:'create', newItem})
    idRef.current += 1;
  };

  const onCheck = (targetId:number) => {
    dispatch({act:'update', targetId});
  };

  const onDelete = (targetId: number) => {
    dispatch({act:'delete', targetId});
  };

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onCheck={onCheck} onDelete={onDelete}/>
    </div>
  )
}

export default App
export type { Todo };