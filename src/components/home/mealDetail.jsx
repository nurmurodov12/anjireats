import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const MealDetail = () => {
  const param = useParams();

  const [data, setData] = useState([]);

  useEffect((val) => {
    const dataJson = async () => {
      const { data: meal } = await axios.get(
        `http://localhost:3000/foods/${param.id}`,
      );

      setData(meal);
    };

    dataJson();
  }, []);

  const {
    data: meals,
    setData: setMeal,
    loading,
  } = useFetch("http://localhost:3000/offers");

  // const offers = meals[0].offers
  const offers = meals;
  console.log(meals);

  console.log(offers);

  return (
    <div className="">
      <div className="meal-detail">
        <div className="top-meal">
          <h2>Restaraunt: {data.restaurant}</h2>
          <img src={data.image} alt="" />
        </div>

        <div className="bottom-meal">
          <div>
            <h3 className="name">{data.name}</h3>
            <p className="delever">
              <i class="fa-solid fa-truck-fast"></i> {data.deliveryTime}
            </p>
          </div>

          <div>
            <h3>{data.price} so'm</h3>
            <p className="delever">
              <i class="fa-solid fa-star"></i>
              {data.rating}
            </p>
          </div>
        </div>

        <button className="add">Add cart</button>
      </div>

      <h1 className="title">Offers</h1>
      <div className="offer">
        {offers?.map((item) => {
          return (
            <div className="meal">
              <div className="top">
                <img src={item.image} alt="" />
              </div>

              <div className="bottom">
                <div className="bottom-lef">
                  <h3 className="text">{item.title}</h3>
                  <p className="text">
                    <i class="fa-solid fa-truck-fast text"></i>
                    {item.deliveryTime}
                  </p>
                </div>

                <div className="bottom-righ">
                  <p>
                    <i class="fa-solid fa-star text"></i>
                    {item.rating}
                  </p>
                  <p className="price">{item.originalPrice} so'm</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealDetail;
