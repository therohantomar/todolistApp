import {AiOutlineFileAdd} from "react-icons/ai"
import {BsListTask} from "react-icons/bs"
import { Link,  useSearchParams } from "react-router-dom"
import { toggleCreatePopup } from "../utils/popupSlice"
import { useDispatch } from "react-redux"
import {FaTrash} from "react-icons/fa"
import { BsFillCheckSquareFill } from "react-icons/bs"

import {MdLabelImportant} from "react-icons/md"

function Sidebar() {
  let [searchParams,setsearchParams] = useSearchParams();
  const dispatch=useDispatch()
  const params=searchParams.get("v")
  
  return (
    <aside  className="  top-10 bottom-0  w-60 bg-gray-900 text-white shadow-xl">
    <button onClick={()=>dispatch(toggleCreatePopup())}  className="flex items-center bg-yellow-400 px-4 py-2 text-white rounded-md w-full my-2 font-bold   justify-center gap-4">CreateTodo  <AiOutlineFileAdd/></button>
      <ul className="my-10">
       <Link to="/"><li className={`font-bold text-white  my-2 py-2 ${!params?"bg-black":"bg-gray-400"} text-center hover:bg-black uppercase flex items-center  `}><BsListTask className="mx-4"/>Alltask</li></Link>
       <Link to="important?v=important"><li className={`font-bold text-white  my-2 ${params==="important"?"bg-black":"bg-gray-400"}  py-2 text-center hover:bg-black uppercase flex items-center`}><MdLabelImportant className="mx-4"/>Important</li></Link>
       <Link to="completed?v=completed"><li className={`font-bold text-white  my-2 ${params==="completed"?"bg-black":"bg-gray-400"}  py-2 text-center hover:bg-black uppercase flex items-center`}><BsFillCheckSquareFill className="mx-4"/>Completed</li></Link>
       <Link to="deleted?v=deleted"><li className={`font-bold text-white  my-2 ${params==="deleted"?"bg-black":"bg-gray-400"}  py-2 text-center hover:bg-black uppercase flex items-center`}><FaTrash className="mx-4"/>Deleted</li></Link>
      </ul>
    </aside>
  )
}

export default Sidebar
