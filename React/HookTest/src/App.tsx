
import { Counter } from './ExUseReduce'
import ExUseCallback from './component/ExUseCallback'
import ExUseEffect from './component/ExUseEffect'
import ExUseEffect2 from './component/ExUseEffect2'
import MovieInfo from './component/MovieInfo'
import Test1 from './component/Test1'
import Test2 from './component/Test2'
import ExUseRef from './ExUseRef'
import { container } from './types/Movie'

/* 
function App() {

  return (
    <div>
      <ExUseEffect/>
      <ExUseEffect2/>
      <Counter/>
      <Test1/>
      <Test2/>
    </div>
  )
}
 */

function App() {

  return (
    <div>
      <MovieInfo/>
      <ExUseCallback/>
      {/* <ExUseRef/> */}
      <Counter/>
    </div>
  )
}

export default App
