import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <h2>
              <Link to={"/"} className="logo">
                Anjir <i class="fa-solid fa-utensils"></i> Eats
              </Link>
            </h2>

           
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
