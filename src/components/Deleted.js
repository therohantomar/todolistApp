import {  useSelector } from "react-redux"
import TodoCard from "./TodoCard";

function Deleted() {
  const todos=useSelector(store=>store.todo.deletedTodos)
  if (todos.length === 0)
  return (
    <div className="flex gap-2 flex-col mx-4 flex-wrap items-center justify-center   p-4 h-[95vh]">
      <h1 className="font-bold sm:text-xl md:text-xl lg:text-xl  xl:text-4xl 2xl:text-4xl mx-96 text-yellow-500">currently trash its empty</h1>
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
