import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, setTodos, title}) => {

  return (
    <div className='todo-list'>
        <p className='todo-list-tit'>[{title} : {todos.length}개]</p>
        <ul className='todo-list-ul'>
            {todos && todos.map((todo)=> (
            <TodoItem 
            key={todo.id} 
            todoid = {todo.id}
            todos ={todos} 
            setTodos={setTodos} 
            todo={todo}
            />
            ))}
        </ul>
    </div>
  )
}

export default TodoList