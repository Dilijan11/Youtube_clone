import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/movies/:videoId",
      element: <Movies />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
