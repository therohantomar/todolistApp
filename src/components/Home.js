import { useSelector,useDispatch } from "react-redux";
import { toggleCreatePopup } from "../utils/popupSlice";
import TodoCard from "./TodoCard";

function Home() {
  const todos = useSelector((store) => store.todo.todos);
  const dispatch=useDispatch()

  if (todos.length === 0)
    return (
      <div className="flex gap-2 flex-col mx-4 flex-wrap items-center justify-center   p-4 h-[95vh]">
      <div className="absolute top-1/2 left-1/2 right-1/2 bottom-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold sm:text-xl md:text-xl w-max lg:text-xl  xl:text-2xl 2xl:text-2xl font-ubuntu  text-yellow-500">No Todo</h1>
        <button onClick={()=>dispatch(toggleCreatePopup())} className="px-2 my-4 sm:text-md md:text-md lg:text-md font-ubuntu  xl:text-xl 2xl:text-xl  font-bold bg-yellow-500 rounded-md text-white">CreateTodo</button>
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

export default Home;
