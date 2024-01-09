import React from 'react'
import iconCheck from "../assets/images/icon-check.svg"
import styled from 'styled-components'
import { useState } from 'react'
import iconCross from "../assets/images/icon-cross.svg"

const StyledCheck = styled.button`${({checkTheme}) => (checkTheme ? `border: 1px solid hsl(237, 14%, 26%); padding: 4px; width: 20px; height: 20px;border-radius: 30px; background: white;` : `border: 1px solid hsl(237, 14%, 26%);padding: 4px; width: 20px; height: 20px;border-radius: 30px; background: blue;`)}`
function Todo({text, todo, toDos, setToDos}) {
    const [checkTheme, setCheckTheme] = useState(true)

    const deleteHandler = () => {
        setToDos(toDos.filter((el) => el.id !== todo.id))
        console.log(todo)
    }

    const completeHandler = () => {
        setToDos(toDos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
        setCheckTheme(prevState => !prevState)
    }
  return (
    <div className="todo">
        
        <StyledCheck  className={checkTheme} onClick={completeHandler}></StyledCheck>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <img src={iconCross} className='deleteBtn' onClick={deleteHandler} alt="nbj" />
      
    </div>
  )
}

export default Todo