import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as uuidv4} from 'uuid'

// 명령을 내리기 위한 Action 불러오기
import {TodoReducerActions} from '../redux/reducers/todoSlice'

const TodoInput = () => {
    let inputRef = useRef("")

    const dispatch = useDispatch()

    const handleClick = () => {
        let inputText = inputRef.current.value
        if (inputText != ""){
            console.log(inputText);
            // setTodos([...todos, {id: uuidv4(), text : inputText, complete: false} ])
            dispatch(TodoReducerActions.addTodo({id: uuidv4(), text : inputText, complete: false}))
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