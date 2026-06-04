import { log } from 'mathjs';
import React  from 'react'
import { useState } from 'react';
import Hook1 from './components/hook1';

const App = () => {
  console.log('App component rendered');

  const [a, setA] = useState(0);

  const changeA = () => {
    setA(a + 1);
  }

  return (
    <div>
      <div className='page1' style={{ maxheight: '100vh', backgroundColor: 'lightgray' }}>

      <h2 className="aa">The value of a is {a}</h2>
      <button onClick={changeA} >Click</button>
      </div>
      <Hook1 />
    </div>
  )
}

export default App
