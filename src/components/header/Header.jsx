import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <h2>
              Anjir <i class="fa-solid fa-utensils"></i> Eats
            </h2>

            <form>
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Find in Eats" />
            </form>
          </div>

          <div className="header-right">
            <i class="fa-solid fa-globe"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
