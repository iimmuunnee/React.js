import React, { useState } from 'react'
import {FaCheckCircle, FaRegCircle} from "react-icons/fa"

const TodoItem = ({todos, setTodos, todo}) => {

  const [newText, setNewText] = useState(todo.text)
  const [edited, setEdited] = useState(false)

    const handleCheckChange = () => {
        let updateList = todos.map((item) => ({
            ...item,
            complete : item.id === todo.id ? !item.complete : item.complete
        }))
        // console.log(updateList);
        setTodos(updateList)
    }

    const handleEdit = (e) => {
      console.log("handleEdit");
      if(edited){
        setEdited(false)
      }
      else{
        setEdited(true)

      }
    }

    const onChange = (e) => {
      console.log(e.target.value);
      let updateList2 = todos.map((item) => (
        {
          ...item,
          text: item.id === todo.id ? e.target.value : item.text
        }
      ))
      console.log(updateList2);
      setTodos(updateList2)
    }

    const boom = () => {
      if(window.confirm("삭제할거야?")){
        let after_array = todos.filter((item) => todo.id !== item.id)
        setTodos(after_array)
      }
    }

  return (
    <li className='todo-item'>
       {!todo.complete?
       <FaRegCircle
       style={{color : "lightgray"}}
       className="todo-item-checkbox"
       onClick={handleCheckChange}
       /> :
        <FaCheckCircle
         style={{color : "green"}}
         className="todo-item-checkbox"
         onClick={handleCheckChange}
         />
         }

        {!edited ? 
        <span className={`todo-item-content
        ${!todo.complete?'':'todo-item-content-checked'}`}>{todo.text}</span>    
        : <input type='text' className='todo-item-edit-input' onChange={onChange} value={todo.text}></input>
        }

        {!todo.complete?<button className='todo-item-edit-btn' onClick={handleEdit}>🔪</button>:""}

        <button className='todo-item-delete-btn' onClick={boom}>🧨</button>
    </li>
  )
}

export default TodoItem