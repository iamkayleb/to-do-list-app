import React from 'react'
import iconCheck from "../assets/images/icon-check.svg"

export default function Form({setInputText, toDos, setToDos, inputText}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
    console.log(e.target.value)
  }

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...toDos, {text: inputText, completed: false, id: Math.random()*1000}
    ]), 
    setInputText("")
  }

  
  return (
    <form >
        <button type="submit" className="add-container" onClick={submitToDoHandler}>
        </button>
        <input value={inputText} type="text" placeholder='Create a new todo...' onChange={inputTextHandler}/>
        
    </form>
  )
}