import React, { useState, useEffect, createContext, useRef } from "react";
import "./home.css";
import { useFetch } from "./../../hooks/useFetch";
import Meal from "./meal";
import { toast } from "react-toastify";

const Home = () => {
  const [active, setActive] = useState("all");
  const [sort, setSort] = useState("");

  const {
    data: meals,
    setData,
    error,
    loading,
    fakerData,
  } = useFetch("http://localhost:3000/foods");

  function filterForAll() {
    setActive("all");

    const filteredData = fakerData.filter((val) => {
      return val.category;
    });

    setData(filteredData);
  }

  function filterForBurger() {
    setActive("burgers");

    const filteredData = fakerData.filter((val) => {
      return val.category.toLowerCase() === "burger";
    });

    setData(filteredData);
  }

  function filterForSushi() {
    setActive("sushi");

    const filteredData = fakerData.filter((val) => {
      return val.category.toLowerCase() === "sushi";
    });

    setData(filteredData);
  }

  function filterForPizza() {
    setActive("pizza");
    const filteredData = fakerData.filter(
      (val) => val.category.toLowerCase() === "pizza",
    );

    setData(filteredData);
  }

  function filterForPasta() {
    setActive("pasta");
    const filteredData = fakerData.filter(
      (val) => val.category.toLowerCase() === "pasta",
    );

    setData(filteredData);
  }

  function filterForLunch() {
    setActive("lunch");

    const filteredData = fakerData.filter((val) => {
      return val.category.toLowerCase() === "lunch";
    });

    setData(filteredData);
  }

  const refForSearch = useRef();

  function searchMeals(e) {
    e.preventDefault();

    const searchedMeal = fakerData.filter((val) => {
      return val.name
        .toLowerCase()
        .includes(refForSearch.current.value.toLowerCase());
    });

    if (searchedMeal.length !== 0) {
      toast.success("Found you searched meal");
    }

    if (searchedMeal.length === 0) {
      toast.error("Ther's not you searched meal");
    }

    setData(searchedMeal);
  }

  useEffect(() => {
    if (sort === "cheap") {
      const sorted = [...meals].sort((a, b) => {
        return a.price - b.price;
      });
      setData(sorted);
    }

    if (sort === "expensive") {
      const sorted = [...meals].sort((a, b) => {
        return b.price - a.price;
      });

      setData(sorted);
    }

    if (sort === "default") {
      setData(fakerData);
    }
  }, [sort]);

  console.log(meals);

  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-title">
            <h2>What to orders</h2>
          </div>

          <div className="home-categories">
            <button
              className={`${active.toLowerCase() === "all" ? "active" : "simple"}`}
              onClick={filterForAll}
            >
              All
            </button>
            <button
              className={`${active.toLowerCase() === "burgers" ? "active" : "simple"}`}
              onClick={filterForBurger}
            >
              Burgers
            </button>
            <button
              className={`${active.toLowerCase() === "sushi" ? "active" : "simple"}`}
              onClick={filterForSushi}
            >
              Sushi
            </button>
            <button
              className={`${active.toLowerCase() === "pizza" ? "active" : "simple"}`}
              onClick={filterForPizza}
            >
              Pizza
            </button>
            <button
              className={`${active.toLowerCase() === "pasta" ? "active" : "simple"}`}
              onClick={filterForPasta}
            >
              Pasta
            </button>
            <button
              className={`${active.toLowerCase() === "lunch" ? "active" : "simple"}`}
              onClick={filterForLunch}
            >
              Lunch
            </button>

            <select
              className="custom-select"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort</option>
              <option value="cheap">From cheap to expensive</option>
              <option value="expensive">From expensive to cheap</option>
            </select>
          </div>

          <form className="form" onSubmit={searchMeals}>
            <i className="fa-solid fa-magnifying-glass form-i"></i>
            <input
              ref={refForSearch}
              type="text"
              placeholder="Find in Eats "
              className="form-input"
            />
          </form>

          <div className="home-meals">
            <h2>Popular meals</h2>

            <div className="meals-container">
              {loading ? <h1 className="loading">Loading...</h1> : ""}
              {meals.map((val) => {
                return (
                  <Meal
                    key={val.id}
                    name={val.name}
                    deliveryTime={val.deliveryTime}
                    image={val.image}
                    rating={val.rating}
                    price={val.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
