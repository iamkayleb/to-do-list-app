import React from 'react'
import Todo from './Todo'
function TodoList({toDos, setToDos, filteredToDos}) {
  console.log(toDos)
  return (
    <div className="todo-list">
        <ul>
          {filteredToDos.map((todo) => (
            <Todo 
            text={todo.text}
            toDos={toDos}
            todo={todo}
            key={todo.id}
            setToDos={setToDos}
            />
          ))}
        </ul>
    </div>
  )
}

export default TodoList