import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root.jsx/Root,";
import { toast } from "react-toastify";
import Asosiy from "./components/asosiy/Asosiy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Asosiy />,
      },
      {
        path: "/basket",
        element: "salom",
      }
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
