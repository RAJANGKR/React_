import { columnTransformDependencies } from 'mathjs'
import React from 'react'



const App = () => {

  const greet = (name) => {
    return `Hello, ${name}!`
  }

  const pgScrolling = (element) => {
    if(element>0) {
      console.log('Scrolling down')
      console.log('Speed',element)
    } else {
      console.log('Scrolling up')
      console.log('Speed',element)

    }
  }
  return (
    <div onWheel={(e) => 
    pgScrolling(e.deltaY)}>

      <div className='page 1' style={{ height: '100vh', backgroundColor: 'lightgray' }}></div>
      <div className='page 2' style={{ height: '100vh', backgroundColor: 'lightblue' }}></div>
      <div className='page 3' style={{ height: '100vh', backgroundColor: 'lightgreen' }}></div>
    </div>


  )
}

export default App
