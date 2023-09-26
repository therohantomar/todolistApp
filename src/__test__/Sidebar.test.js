import { fireEvent, render} from "@testing-library/react";
import TaskContainer from "../components/TaskContainer";
import store from "../utils/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../components/Sidebar";


test("hamburgermenu rendering on navbar & onclick of menu closes the sidebar", async () => {
  const utils = render(
    <Router>
      <Provider store={store}>
        <TaskContainer />
      </Provider>
    </Router>
  );

  
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const HamburgerMenu = utils.queryByTestId("logo");
  expect(HamburgerMenu).toBeInTheDocument();

  fireEvent.click(HamburgerMenu);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const sidebar = utils.queryByTestId("sidebar");
  expect(sidebar).toBe(null);
});

test("clicking to do button open's the popup", () => {
  const view = render(
    <Router>
      <Provider store={store}>
        <Sidebar />
      </Provider>
    </Router>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const createTodo = view.queryByTestId("createTodo");

  fireEvent.click(createTodo);

  const utils = render(
    <Router>
      <Provider store={store}>
        <TaskContainer />
      </Provider>
    </Router>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const Popup=utils.queryByTestId("Popup")

  expect(Popup).toBeInTheDocument()
});

