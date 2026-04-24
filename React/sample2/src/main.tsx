
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react' */

/* 
createRoot(document.getElementById('root')!).render(
  <p>Hello World!</p>
  <p>Hello World!</p>
) 
*/

/* 
createRoot(document.getElementById('root')!).render(
  <div>
    <p>Hello World!</p>
    <p>Hello World!</p>
  </div>
)
 */

/* 
createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <p>Hello World!</p>
    <p>Hello World!</p>
  </React.Fragment>
)
 */

/* 
createRoot(document.getElementById('root')!).render(
  <>
    <p>Hello World!</p>
    <p>Hello World!</p>
  </>
)
 */

/* 
createRoot(document.getElementById('root')!).render(
  <>
    const input =(
      <div className="field">
        <label htmlFor="title"></label>
        <input type="text" id="title"/>
      </div>
    );
  </>
)
 */

/* Error
createRoot(document.getElementById('root')!).render(
  const input =(
    <div className="field">
      <label htmlFor="title"></label>
      <input type="text" id="title"/>
    </div>
  );
)
 */

/* 
const input =(
  <div className="field">
    <label htmlFor="title"></label>
    <input type="text" id="title"/>
  </div>
);

createRoot(document.getElementById('root')!).render(
  input
);
 */