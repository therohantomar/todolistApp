import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskContainer from "./components/TaskContainer";
import Home from "./components/Home";
import Important from "./components/Important";
import Completed from "./components/Completed";
import Deleted from "./components/Deleted";
import store from "./utils/store";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <TaskContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "important",
        element: <Important />,
      },
      {
        path: "completed",
        element: <Completed />,
      },
      {
        path: "deleted",
        element: <Deleted />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </>
  );
}

export default App;
