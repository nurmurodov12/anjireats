import React, { useContext, useState } from "react";
import "./cart.css";
import { Context } from "./../../App";

const Cart = () => {
  const { state, dispatch } = useContext(Context);

  console.log(state);

  const [counter, setCounter] = useState(1);

  const allSum = state.cart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);
  console.log(allSum);

  function clearance() {
    
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-content">
          <div>
            {state.cart.map((val) => {
              return (
                <div className="cart-detail" key={val.id}>
                  <div className="top-meal">
                    <img src={val.image} alt="" />
                    <h2 className="restaraunt">Restaurant: {val.restaurant}</h2>

                    <div className="prices">
                      <p className="">
                        <i className="fa-solid fa-star text"></i>
                        {val.rating}
                      </p>
                      <p>
                        <i class="fa-solid fa-truck-fast text"></i>
                        {val.deliveryTime}
                      </p>
                    </div>

                    <div className="name">
                      <h2>{val.name}</h2>
                      <p>{val.price} so'm</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {state.cart.length > 0 ? (
            <div className="sum">
              <h2 className="empty">Your order</h2>

              <h3 className="count">
                Your order count: <span>{state.cart.length}</span>
              </h3>

              <p className="all-sum">
                All sum: <span>{allSum}so'm</span>
              </p>

              <button className="clearance" onClick={clearance}>Clearance</button>
            </div>
          ) : (
            <h1 className="empty">Your cart empty now😕</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
