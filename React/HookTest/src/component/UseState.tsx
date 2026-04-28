let hooks: any[] = [];
let currentIndex = 0;
let render = () => console.log('render');

//랜더 함수가 없으나 있다고 가정
function UseState<T>(init: T): [T,(newValue:T)=>void]{
  const index = currentIndex;

  if(hooks[index]===undefined){
    hooks[index] = init;
  }
  function setState(newValue:T){
    hooks[index] = newValue;
    render();
  }
  currentIndex++;
  return [hooks[index], setState];
}

export default UseState;