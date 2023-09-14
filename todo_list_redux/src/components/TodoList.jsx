import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, setTodos, title, checked}) => {

  let will_array = todos.filter((todo) => todo.complete === checked)

  return (
    <div className='todo-list'>
        <p className='todo-list-tit'>[{title} : {will_array.length}개]</p>
        <ul className='todo-list-ul'>
            {todos && todos.map((todo)=> {
              if (todo.complete === checked) {
                return (           
                  <TodoItem 
                  key={todo.id} 
                  todoid = {todo.id}
                  todos ={todos} 
                  setTodos={setTodos} 
                  todo={todo}
                  />)
              }
              else{
                return null
              }
            })}
        </ul>
    </div>
  )
}

export default TodoList