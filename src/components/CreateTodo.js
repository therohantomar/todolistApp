import { toggleCreatePopup } from "../utils/popupSlice";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Addtodo } from "../utils/helper";
import { useState } from "react";
import { addTodo } from "../utils/todoSlice";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")


  return (
    <div
      className="flex flex-col w-1/2 h-max p-4  rounded-md text-white bg-gray-800 "
    >
      <button
        className="text-red-800 hover:text-white font-semibold text-2xl "
        onClick={() => dispatch(toggleCreatePopup())}
      >
        <RxCross2 />
      </button>
      <form onSubmit={(e)=>Addtodo(e,{title,description},dispatch,addTodo,setDescription,setTitle)} className="  flex flex-col items-center gap-4 w-full h-full ">
        <h1>Create a Todo </h1>
        <div className="flex gap-2 ">
          <div className="flex flex-col  gap-2">
            <label  className="font-semibold text-xl ">
              Title:
            </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required  className="p-2 rounded-md w-64 text-gray-800"  name="taskName" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-xl ">
            Description:
          </label>
          <textarea value={description} required rows={4} onChange={(e)=>setDescription(e.target.value)} className="p-2  rounded-md w-64 text-gray-800" name="taskDescription" />
        </div>
        <input type="Submit" value="Add Todo"   className="w-64 rounded-md bg-white text-gray-800 py-2 my-4 " />
      </form>
    </div>
  );
};

export default CreateTodo;
