import React, { useContext } from "react";
import "./cart.css";
import { Context } from "./../../App";

const Cart = () => {
  const { state, dispatch } = useContext(Context);

  console.log(state);

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-content">
            {state.cart.map((val) => {
                return "ao"
            })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
