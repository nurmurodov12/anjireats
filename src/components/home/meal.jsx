import React, { useContext } from "react";
4;
import "./home.css";
import { Link } from "react-router-dom";
import { Context } from "./../../App";

const Meal = ({ image, name, price, rating, deliveryTime, id }) => {
  const { state, dispatch } = useContext(Context);
  const forCartObj = {
    image: image,
    name: name,
    price: price,
    rating: rating,
    deliveryTime: deliveryTime,
    id: id,
  };

  return (
    <div className="meal">
      <div className="top">
        <Link className="none-text" to={`meals/${id}`}>
          <img src={image} alt="" className=""/>
        </Link>
      </div>

      <div className="bottom">
        <div className="bottom-left ">
          <h3>{name}</h3>
          <p className="time">
            <i class="fa-solid fa-truck-fast"></i>
            {deliveryTime}
          </p>
        </div>

        <div className="bottom-right ">
          <p className="">
            <i class="fa-solid fa-star"></i>
            {rating}
          </p>
          <p className="price">{price} so'm</p>
        </div>
      </div>

      <button className="add-2" onClick={() => dispatch(forCartObj)}>
        Add cart
      </button>
    </div>
  );
};

export default Meal;
