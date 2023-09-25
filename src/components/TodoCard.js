import React from "react";
import { useDispatch } from "react-redux";
import { toggleImportant, toggleDeleted } from "../utils/todoSlice";
import {MdLabelImportant} from "react-icons/md"
import {AiOutlineCheckSquare} from "react-icons/ai"
import {BiSolidTrashAlt} from "react-icons/bi"

const TodoCard = (todo) => {
    const dispatch=useDispatch()
  return (
    <div className="w-max h-max  p-2 flex flex-col bg-black  text-gray-200 mx-2 border-2 border-gray-500 rounded-md ">
      <h1 className="w-40 text-yellow-500 border-b border-gray-300 uppercase font-semibold h-10">{todo?.title}</h1>
      <h1 className="w-40 h-20 break-words overflow-y-scroll scrollbar-none">{todo?.description}</h1>
      {todo?.isDeleted?null:<span className="flex gap-2">{todo.isImportant?null:<button className=" rounded-md text-yellow-500 w-max" onClick={()=>dispatch(toggleImportant(todo))}><MdLabelImportant/></button>} 
     <button className=" rounded-md text-yellow-500 w-max" onClick={()=>dispatch(toggleImportant())}><AiOutlineCheckSquare/></button>
   <button className=" rounded-md text-yellow-500 w-max" onClick={()=>dispatch(toggleDeleted(todo))}><BiSolidTrashAlt/></button>
     </span>}
     <p className="text-sm font-thin ">{todo?.date.slice(0,21)}</p>
    </div>
  );
};

export default TodoCard;
