import { useState } from 'react';

const Hook1 = () => {

    const [count, setCount] = useState(0);

    function increment() {
      setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function jump5() {
        setCount(count + 5);
    }

  return (
    <div className='hook1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>Count: {count}</h2>
      <button className="btnD" onClick={decrement}>-</button>
      <button className="btnI" onClick={increment}>+</button>
      <button className="btnJ" onClick={jump5}>Jump +5</button>


    
       
      </div>
  )
}

export default Hook1