import { useState } from 'react';
import { ChildA } from './components/ChildA';
import { ThemeContext, userContext } from './context';
import './App.css'


const App = () => {
  const [theme, setTheme] = useState('light');
  const [user] = useState({ name: 'John Doe' });


  return (
    <userContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id='app' className={`app ${theme}`}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </userContext.Provider>
  );
}
      
export default App
