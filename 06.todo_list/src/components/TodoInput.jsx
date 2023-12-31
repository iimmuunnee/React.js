import React, { useRef } from 'react'
import {v4 as uuidv4} from 'uuid'

const TodoInput = ({todos, setTodos}) => {
    let inputRef = useRef("")

    const handleClick = () => {
        let inputText = inputRef.current.value
        if (inputText != ""){
            console.log(inputText);
            setTodos([...todos, {id: uuidv4(), text : inputText, complete: false} ])
        }
        inputRef.current.value = ""
        inputRef.current.focus()
    }

  return (
    <div className='todo-inputbox'>
        <input type="text" 
        ref={inputRef}
        className='todo-inputbox-input'
        placeholder='할 일을 입력해주세요'
        />

        <input onClick={handleClick}
               type='button'
               className='todo-inputbox-add-btn' 
               value="등록"
         />
    </div>
  )
}

export default TodoInput