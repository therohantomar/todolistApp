import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import { Link } from "react-router-dom";
function Important() {
  const todos = useSelector((store) => store.todo.importantTodos);
  


  if (todos.length === 0)
  return (
    <div className="flex gap-2 flex-col mx-4 flex-wrap items-center justify-center  sm:mx-20 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-60 p-4 h-[95vh]">
      <div className="absolute top-1/2 left-1/2 right-1/2 bottom-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
      <h1 className="font-bold sm:text-xl md:text-xl lg:text-xl  w-max xl:text-2xl 2xl:text-2xl font-ubuntu text-yellow-500">Nothing Important</h1>
      <button className="px-4 py-2 sm:text-md md:text-md lg:text-md w-max  xl:text-xl 2xl:text-xl font-bold font-ubuntu bg-yellow-500 my-2 rounded-md text-white"><Link to="/" >Redirect to Alltask</Link></button>
   </div> 
    </div>
  );
  return (
    <div className="flex  mx-4 flex-wrap w-max p-4 h-[96vh] scrollbar-none ">
    
      {todos.map((todo) => {
        return <TodoCard key={todo?.id} {...todo} />;
      })}
    </div>
  );
}

export default Important;
