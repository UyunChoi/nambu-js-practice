import React, { useRef, useState } from 'react';
import './TodoEditor.css';
interface TodoEditorProps {
  onCreate: (content:string) => void
}

const TodoEditor = ({onCreate}:TodoEditorProps) => {
  const [content, setContent] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }
  const onAdd = () => {
    if(!content){
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      onAdd();
    }
  };

  return(
    <div className="TodoEditor">
        {/* <h4>TodoEditort Component</h4> */}
        <h4>새로운 Todo 작성하기 🖋️</h4>
        <div className="editor-wrapper">
          <input 
            type="text" 
            placeholder="새로운 Todo..." 
            onChange={onChangeContent}
            ref={inputRef}
            onKeyDown={onKeyDown}
            value={content}
          />
          <button onClick={onAdd}>추가</button>
        </div>
    </div>
  );
};

export default TodoEditor;