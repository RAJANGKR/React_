import React ,{useContext} from 'react'
import { ThemeContext, userContext } from '../context';

export const ChildC = () => {

    const user = React.useContext(userContext);
    const { theme, setTheme } = React.useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


  return (
    <>
    <div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={toggleTheme}>
            Change Theme
        </button>
    </div>

    <div>
        <p>User Name : {user.name}</p>
    </div>
    
    </>
  )
}
