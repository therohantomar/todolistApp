import { createSlice } from "@reduxjs/toolkit";



const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[],
        importantTodos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos=[...state.todos,action.payload]
        },
        toggleImportant:(state,action)=>{
            const index=state.todos.findIndex(todo=>todo.id===action.payload.id)
            state.todos.at(index).isImportant=true
            const Todo=state.todos.at(index)
            state.importantTodos=[...state.importantTodos,Todo]
            const filteredTodo=state.todos.filter((todo)=>Todo.id!==todo.id)
            state.todos=filteredTodo
        }
    }
})

export const {addTodo, toggleImportant}=todoSlice.actions
export default todoSlice.reducer