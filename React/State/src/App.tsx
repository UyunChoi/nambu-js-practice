import { useState } from 'react';
import './App.css';
import Counter from './component/Counter';
import Step from './component/Step';

function App() {
  //const [count, setCount] = useState<number>(init) //제네릭
  // 값을 설정할때 const [count, setCount] = useState<number>(init)를 통해야 리랜더링 적용됨

  return (
    <>
      <Step></Step>
    </>
  )
}

export default App
