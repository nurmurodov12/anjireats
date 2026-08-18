import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [active, setActive] = useState("all");

  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-title">
            <h2>What to order</h2>
          </div>

          <div className="home-categories">
            <button
              className={`${active.toLowerCase() === "all" ? "active" : "simple"}`}
              onClick={() => setActive("all")}
            >
              All
            </button>
            <button
              className={`${active.toLowerCase() === "burgers" ? "active" : "simple"}`}
              onClick={() => setActive("burgers")}
            >
              Burgers
            </button>
            <button
              className={`${active.toLowerCase() === "sushi" ? "active" : "simple"}`}
              onClick={() => setActive("sushi")}
            >
              Sushi
            </button>
            <button
              className={`${active.toLowerCase() === "pizza" ? "active" : "simple"}`}
              onClick={() => setActive("pizza")}
            >
              Pizza
            </button>
            <button
              className={`${active.toLowerCase() === "pasta" ? "active" : "simple"}`}
              onClick={() => setActive("pasta")}
            >
              Pasta
            </button>
            <button
              className={`${active.toLowerCase() === "lunch" ? "active" : "simple"}`}
              onClick={() => setActive("lunch")}
            >
              Lunch
            </button>

            <select
              className="custom-select"
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="default">Sort</option>
              <option value="low-to-high">From cheap to expensive</option>
              <option value="high-to-low">From expensive to cheap</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
