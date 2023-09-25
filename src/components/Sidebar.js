import {AiOutlineFileAdd} from "react-icons/ai"
import { Link } from "react-router-dom"
import { toggleCreatePopup } from "../utils/popupSlice"
import { useDispatch } from "react-redux"


function Sidebar() {
  const dispatch=useDispatch()
  return (
    <aside  className="  top-10 bottom-0  w-60 bg-gray-900 text-white shadow-xl">
    <button onClick={()=>dispatch(toggleCreatePopup())}  className="flex items-center bg-yellow-400 px-4 py-2 text-white rounded-md w-full my-2 font-bold   justify-center gap-4">CreateTodo  <AiOutlineFileAdd/></button>
      <ul className="my-10">
       <Link to="/"><li className="font-bold text-white  my-2 bg-gray-400 py-2 text-center hover:bg-black uppercase">Alltask</li></Link>
       <Link to="important"><li className="font-bold text-white  my-2 bg-gray-400 py-2 text-center hover:bg-yellow-500 uppercase">Important</li></Link>
       <Link to="completed"><li className="font-bold text-white  my-2 bg-gray-400 py-2 text-center hover:bg-yellow-500 uppercase">Completed</li></Link>
       <Link to="deleted"><li className="font-bold text-white  my-2 bg-gray-400 py-2 text-center hover:bg-yellow-500 uppercase">Deleted</li></Link>
      </ul>
    </aside>
  )
}

export default Sidebar
