import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import Filter from './Filter'
import styled from 'styled-components'
import Form from './Form'
import iconMoon from "../assets/images/icon-moon.svg"
import iconSun from "../assets/images/icon-sun.svg"

// const MyApp = styled.body`${({appTheme }) => (appTheme ? 'background-color: hsl(235, 21%, 11%); display: flex; flex-direction: column;justify-content: center; align-items: center; padding: 0; margin: 0; min-height: 100vh; font-family: Josefin Sans, sans-serif;' : 'background-color: white;background-repeat: no-repeat; display: flex; flex-direction: column;justify-content: center; align-items: center; padding: 0; margin: 0; min-height: 100vh; font-family: Josefin Sans, sans-serif;')};


function App() {

  const [inputText, setInputText] = useState('');
  const [appTheme, setAppTheme] = useState(true);
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([])

  useEffect(() => {
    filterHandler();
  }, [toDos, status])
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(toDos.filter(todo => todo.completed === true))
        break;
      case 'active':
        setFilteredToDos(toDos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredToDos(toDos);
        break
    }
  }
  const themeHandler = () => {
      setThemeImage1(prevState => !prevState)
      setAppTheme(prevState => !prevState)

  }

  const [themeImage1, setThemeImage1] = useState(true);
 

  const toggleThemeImage = themeImage1 ? iconSun : iconMoon
  
  return (
      <div>
           <header>
            <h1>todo</h1>
            <img src={toggleThemeImage} className='theme' alt="" onClick={themeHandler} />
          </header>
          <Form 
          setInputText={setInputText}
          inputText={inputText}
          setToDos={setToDos}
          toDos={toDos}/>          
          <TodoList 
          setToDos={setToDos} 
          toDos={toDos}
          filteredToDos={filteredToDos}/>
          <Filter
          setStatus={setStatus}/>
      </div>
  )
}

export default App
 