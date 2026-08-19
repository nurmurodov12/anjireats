import React, { createContext, useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root.jsx/Root,";
import { toast } from "react-toastify";
import Asosiy from "./components/asosiy/Asosiy";
import MealDetail from "./components/home/mealDetail";
import Cart from "./components/cart/Cart";

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "meals/:id",
        element: <MealDetail />,
      },
    ],
  },
]);

export const Context = createContext("");
const App = () => {
  const initialState = {
    cart: [
      {
        id: "1",
        name: "Cheeseburger Max",
        category: "burger",
        price: 45000,
        rating: 4.8,
        deliveryTime: "20-30 min",
        deliveryFee: 12000,
        restaurant: "Burger Master",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
      },
    ],
  };

  function reduce(now, action) {
    return { cart: [...now.cart, action] };
  }

  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </Context.Provider>
    </div>
  );
};

export default App;
