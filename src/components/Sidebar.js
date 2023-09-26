import {AiOutlineFileAdd} from "react-icons/ai"
import {BsListTask} from "react-icons/bs"
import { Link,  useSearchParams } from "react-router-dom"
import { toggleCreatePopup } from "../utils/popupSlice"
import { useDispatch } from "react-redux"
import {FaTrash} from "react-icons/fa"
import { BsFillCheckSquareFill } from "react-icons/bs"
import { useSelector } from "react-redux"

import {MdLabelImportant} from "react-icons/md"
import { toggleMenu } from "../utils/menuSlice"

function Sidebar() {
  let [searchParams,setsearchParams] = useSearchParams();
  const completedTodos=useSelector(store=>store.todo.completedTodos)
  const deletedTodos=useSelector(store=>store.todo.deletedTodos)
  const importantTodos=useSelector(store=>store.todo.importantTodos)
  const todos=useSelector(store=>store.todo.todos)

  const dispatch=useDispatch()
  const params=searchParams.get("v")
  
  return (
    <aside  className="  top-10 bottom-0  w-60 bg-gray-900 text-white shadow-xl">
    <button onClick={()=>{
                          dispatch(toggleCreatePopup())
                          dispatch(toggleMenu())}}  className="flex items-center bg-yellow-400 px-4 py-2 text-white rounded-md w-full my-2 font-bold   justify-center gap-4">CreateTodo  <AiOutlineFileAdd/></button>
      <ul className="my-10">
       <Link to="/"><li  onClick={()=>dispatch(toggleMenu())} className={`font-bold text-white  my-2 py-2 ${!params?"bg-black":"bg-gray-500"} text-center hover:bg-black uppercase flex items-center  `}><BsListTask className="mx-4"/>Alltask  <p className="mx-2 text-sm text-red-600 rounded-full">{todos.length===0?null:todos.length}</p></li></Link>
       <Link to="important?v=important"><li onClick={()=>dispatch(toggleMenu())} className={`font-bold text-white  my-2 ${params==="important"?"bg-black":"bg-gray-500"}  py-2 text-center hover:bg-black uppercase flex items-center`}><MdLabelImportant className="mx-4"/>Important <p className="mx-2 text-sm text-red-600 rounded-full">{importantTodos.length===0?null:importantTodos.length}</p></li></Link>
       <Link to="completed?v=completed"><li onClick={()=>dispatch(toggleMenu())} className={`font-bold text-white  my-2 ${params==="completed"?"bg-black":"bg-gray-500"}  py-2 text-center hover:bg-black uppercase flex items-center`}><BsFillCheckSquareFill className="mx-4"/>Completed<p className="mx-2 text-sm text-red-600 rounded-full">{completedTodos.length===0?null:completedTodos.length}</p></li></Link>
       <Link to="deleted?v=deleted"><li  onClick={()=>dispatch(toggleMenu())} className={`font-bold text-white  my-2 ${params==="deleted"?"bg-black":"bg-gray-500"}  py-2 text-center hover:bg-black uppercase flex items-center`}><FaTrash className="mx-4"/>Deleted<p className="mx-2 text-sm text-red-600 rounded-full">{deletedTodos.length===0?null:deletedTodos.length}</p></li></Link>
      </ul>
    </aside>
  )
}

export default Sidebar
