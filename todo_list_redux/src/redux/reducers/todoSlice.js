import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : 'todo',
    initialState : { 
        todos : [],
    },
    reducers : { 
        addTodo : (state, action) => {
            console.log(action);
            state.todos = state.todos.concat(action.payload)
        }
    }
})

export const TodoReducerActions = todoSlice.actions

export default todoSlice.reducer