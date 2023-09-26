import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import  store from "../utils/store"
import Navbar from "../components/Navbar"


test("rendering text `Todolist on navbar`",()=>{
    const view= render(<Provider store={store}><Navbar/></Provider>)
    
  // eslint-disable-next-line testing-library/prefer-screen-queries
    const logo=view.queryByTestId("Todo-List")
    expect(logo).toBeInTheDocument()

  })