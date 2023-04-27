import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/layouts/BaseLayout";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [{ path: "/", element: <MainPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
