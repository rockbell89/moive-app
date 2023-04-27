import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/layouts/BaseLayout";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { Suspense } from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/movie/:movieId", element: <DetailPage /> },
      ],
    },
  ],
  {
    basename: "/movie-app",
  }
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
