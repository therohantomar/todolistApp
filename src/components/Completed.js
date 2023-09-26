import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import { Link } from "react-router-dom";


function Completed(){
    const todos = useSelector((store) => store.todo.completedTodos);

  
    if (todos.length === 0)
      return (
        <div className="flex gap-2 flex-col mx-4 flex-wrap items-center justify-center   p-4 h-[95vh]">
        <div className="absolute top-1/2 left-1/2 right-1/2 bottom-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold w-max sm:text-xl md:text-xl lg:text-xl font-ubuntu xl:text-2xl 2xl:text-2xl  text-yellow-500">No Task completed</h1>
          <button className="px-2 my-4 sm:text-md md:text-md lg:text-md font-ubuntu  xl:text-xl 2xl:text-xl  w-max font-bold bg-yellow-500 rounded-md text-white"><Link to={"/"}>Get Your tasks</Link></button>
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

export default Completed

