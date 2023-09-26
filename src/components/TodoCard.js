import React from "react";
import { useDispatch } from "react-redux";
import { toggleImportant, toggleDeleted, toggleCompleted } from "../utils/todoSlice";
import {MdLabelImportant} from "react-icons/md"
import {AiOutlineCheckSquare} from "react-icons/ai"
import {BiSolidTrashAlt} from "react-icons/bi"

const TodoCard = (todo) => {
    const dispatch=useDispatch()
  return (
    <div className="xs:w-48 xs:h-48 sm:w-48 md:w-48 lg:48 xl:w-60 2xl:w-60 sm:h-40 md:h-40 lg:h-48  xl:h-60 2xl:h-60  p-4 flex flex-col justify-between bg-black  text-gray-200 mx-2  bg-opacity-95 rounded-md ">
      <h1 className=" text-yellow-500 border-b border-gray-300  uppercase truncate font-ubuntu font-semibold h-max"   >{todo?.title}</h1>
      <h1 className="w-11/12 px-2 h-1/2  font-martian break-words overflow-y-scroll scrollbar-none">{todo?.description}</h1>
      {todo?.isDeleted?null:<span className="flex gap-2">{todo.isImportant?null:<button className=" rounded-md text-yellow-500 w-max "   onClick={()=>dispatch(toggleImportant(todo))}><MdLabelImportant/></button>} 
     <button className=" rounded-md text-yellow-500  w-max" d onClick={()=>dispatch(toggleCompleted(todo))}><AiOutlineCheckSquare/></button>
     <button className=" rounded-md text-yellow-500 w-max" data-tip="delete" onClick={()=>dispatch(toggleDeleted(todo))}><BiSolidTrashAlt/></button>
     </span>}
     <p className="text-sm font-thin  ">{todo?.date.slice(0,21)}</p>
    </div>
  );
};

export default TodoCard;
