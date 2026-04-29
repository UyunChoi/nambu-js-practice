import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Product from './components/Product'
import NotFound from './components/NotFound'

import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
/* 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path='/' 
          element={<Main />} 
        />
        <Route 
          path='/product/*' 
          element={<Product />} 
        />
        <Route 
          path='*' 
          element={<NotFound />} 
        />
      </Routes>
    </BrowserRouter>
  )
}
 */

/* 
const router = createBrowserRouter([
  { path: '/' , element:(<> <Header/><Main/> </>)},
  { path: '/product/*' , element:(<> <Product/> </>)},
  { path: '*' , element:(<> <NotFound/> </>)}
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
 */

const Layout = () => {
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element:<Main/> },
      { path: '/product/*', element:<Product/> },
      
    ]
  },
  /*   
  {
    path: '/user',
    children: [
      {index: true, element:<User/>},
      {path: '/order/*', element:<Order/>},
      
    ]
  }, 
  */
  {
    path: '*', element:<NotFound/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
