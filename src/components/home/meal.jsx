import React from "react";
4;
import "./home.css";

const Meal = ({ image, name, price, rating, deliveryTime }) => {
  return (
    <div className="meal">
      <div className="top">
        <img src={image} alt="" />
      </div>

      <div className="bottom">
        <div className="bottom-left">
          <h3>{name}</h3>
          <p>
            <i class="fa-solid fa-truck-fast"></i>
            {deliveryTime}
          </p>
        </div>

        <div className="bottom-right">
          <p>
            <i class="fa-solid fa-star"></i>
            {rating}
          </p>
          <p className="price">{price} so'm</p>
        </div>
      </div>
    </div>
  );
};

export default Meal;
