import './App.css'
import Hello from './component/Hello'; //확장자 -> 리액트가 알아서 잡아줌 
import Count from './component/Count';
import Welcome from './component/Welcome';
import SayHello from './component/SayHello';
import Library from './component/Library';

/* 
function App() {
  return (
    <>
      <h2>Hello Word</h2>
    </>
  )
}
 */

/* 
function App() {
  return (
    <>
      <Hello/>
    </>
  )
}
 */

/* 
function App() {
  return (
    <>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Count/>
    </>
  )
}
 */

/* 
function App(){
  return(
    <>
      <Count/>
    </>
  );
}
 */


function App() {
  return(
    <>
      <Welcome name='손흥민'/>
      <Welcome name='김첨지'/>
      <Count num={3} />
      <SayHello name='OOO' to='XXX'/>
      <Library/>
    </>
  )
}


export default App;
