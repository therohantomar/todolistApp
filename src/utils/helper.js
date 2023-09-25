export const Addtodo=(e,task,dispatch,addTodo,setDescription,setTitle)=>{
e.preventDefault()

setTitle("")
setDescription("")
const newDate=new Date().toString()
const id=Math.random()
const newTask={...task, date:newDate, isImportant:false, isCompleted:false, isDeleted:false,id}

dispatch(addTodo(newTask))

}