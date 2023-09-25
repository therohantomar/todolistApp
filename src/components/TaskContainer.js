import { Outlet } from "react-router-dom";
import {  useSelector } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CreateTodo from "./CreateTodo";

function TaskContainer() {
  const isOpen = useSelector((store) => store.menu.isOpen);
  const isCreatePopupOpen = useSelector((store) => store.popup.isCreatePopupOpen);
  
  return (
    <div className="w-full overflow-y-scroll scrollbar-none scroll-smooth  bg-gray-800 ">
      <Navbar />
      <span className="flex ">
        {isOpen ? <Sidebar /> : null}
        <Outlet />
        {isCreatePopupOpen ? (
          <div className="h-full bg-black flex items-center justify-center text-white absolute top-0 botton-0 left-0 right-0 opacity-90 ">
            <CreateTodo />
          </div>
        ) : null}
      </span>
    </div>
  );
}

export default TaskContainer;
