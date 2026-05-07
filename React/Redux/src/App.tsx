
import './App.css'
import Display from './Display'
import { Provider } from 'react-redux'
import { store } from './Store'
import CounterA from './CounterA'
import CounterB from './CounterB'

// stor를 공유해야 함
function App() {
  return (
    <Provider store={store}>
      <Display/>
      <CounterA/>
      <CounterB/>
    </Provider>
  )
}

export default App
