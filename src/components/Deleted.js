import {  useSelector } from "react-redux"
import TodoCard from "./TodoCard";

function Deleted() {
  const todos=useSelector(store=>store.todo.deletedTodos)
  if (todos.length === 0)
  return (
    <div className="flex gap-2 flex-col mx-4 flex-wrap items-center justify-center   p-4 h-[95vh]">
      <div className="absolute top-1/2 left-1/2 right-1/2 bottom-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
     
      <h1 className="font-bold  sm:text-xl md:text-xl lg:text-xl  xl:text-2xl font-ubuntu 2xl:text-2xl w-max text-yellow-500">currently trash its empty</h1>
   </div> 
    </div>
  );
return (
  <div className="flex gap-2 mx-4 flex-wrap w-max p-4 h-[95vh] scrollbar-none ">
    {todos.map((todo) => {
      return <TodoCard key={todo?.id} {...todo} />;
    })}
  </div>
);
}

export default Deleted
