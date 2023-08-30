import React, { useState } from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {

    const [todos, setTodos] = useState([])
    console.log(todos);
    let will = todos.filter((todo) => todo.complete === false)
    let done = todos.filter((todo) => todo.complete === true)

  return (
    <div className='todo-container'>
        <h1 className='todo-tit'>ToDo List</h1>
        {/* todo 추가하는 영역 */}
        <TodoInput todos ={todos} setTodos={setTodos}/>

        {/* 해야 할 일 출력 */}
        <TodoList todos ={will} setTodos={setTodos} title={"해야 할 일"}/>

        {/* 완료된 일 출력 */}
        <TodoList todos ={done} setTodos={setTodos} title={"완료 한 일"}/>
    </div>
  )
}

export default TodoHome