import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={approuter}></RouterProvider>
    </div>
  );
};

export default Body;
