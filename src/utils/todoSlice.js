import { createSlice } from "@reduxjs/toolkit";



const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[],
        importantTodos:[],
        deletedTodos:[], 
        completedTodos:[]
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
        },
        toggleDeleted:(state,action)=>{
            const index=state.todos.findIndex(todo=>todo.id===action.payload.id)
            if(index===-1){
            const index=state.importantTodos.findIndex(todo=>todo.id===action.payload.id)
            state.importantTodos.at(index).isDeleted=true
            const Todo=state.importantTodos.at(index)
            state.deletedTodos=[...state.deletedTodos,Todo]
            const filteredTodo=state.importantTodos.filter((todo)=>Todo.id!==todo.id)
            state.importantTodos=filteredTodo
            

            }
            else{
            state.todos.at(index).isDeleted=true
            const Todo=state.todos.at(index)
            state.deletedTodos=[...state.deletedTodos,Todo]
            const filteredTodo=state.todos.filter((todo)=>Todo.id!==todo.id)
            state.todos=filteredTodo
            }
        },
        toggleCompleted:(state,action)=>{
            const index=state.todos.findIndex(todo=>todo.id===action.payload.id)
            state.todos.at(index).isCompleted=true
            const Todo=state.todos.at(index)
            state.completedTodos=[...state.completedTodos,Todo]
            const filteredTodo=state.todos.filter((todo)=>Todo.id!==todo.id)
            state.todos=filteredTodo
        }
    }
})

export const {addTodo, toggleImportant, toggleDeleted, toggleCompleted}=todoSlice.actions
export default todoSlice.reducer