import { RxHamburgerMenu} from "react-icons/rx"
import { toggleMenu } from "../utils/menuSlice"
import { useDispatch } from "react-redux"

function Navbar() {
    const dispatch=useDispatch()
  return (
    <nav  className="w-full   flex justify-between items-center sticky top-0 left-0 right-0 z-10   h-10 bg-gray-800 border-b-2 border-black">
    <RxHamburgerMenu data-testid="logo"  onClick={()=>dispatch(toggleMenu())} className="text-2xl text-yellow-500 font-bold mx-6 cursor-pointer hover:text-gray-500 "/>
    <h1  data-testid="Todo-List" className="font-bold text-xl mx-8 font-nunito text-yellow-500">Todo-List</h1>
    </nav>
  )
}

export default Navbar
