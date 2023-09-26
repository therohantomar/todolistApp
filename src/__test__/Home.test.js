/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home"
import store from "../utils/store";


test("createTodo button appearing on the Home Screen",()=>{
    const view=render(<Router><Provider store={store}><Home/></Provider></Router>)
    expect(view.getByTestId("createTodo")).toBeInTheDocument()
})