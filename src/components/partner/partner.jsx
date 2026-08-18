import React from "react";
import "./partner.css";

const Partner = () => {
  return (
    <div className="partner">
      <div className="container">
        <div className="partner-content">
          <div className="partner-title">
            <h2>You can order from this restaurants</h2>
          </div>

          <div className="partners">
            <a href="https://oqtepalavash.uz/en" target="blank">
              <img
                src={
                  "https://www.afisha.uz/uploads/media/2023/08/ba399baf6ea48ac44d649622e681c4b7.jpg"
                }
                alt=""
              />
            </a>

            <a href="https://evos.uz/" target="blank">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2j8DNLhiykQmgvMPkVnuPWlpR6anJA8gdOXAgi1sIw&s=10"
                alt=""
              />
            </a>

            <a href="https://kfc.com.uz/" target="blank">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmbS8g-ueQsK5BeUM0XgUIsbgpMbWphlDVZ5VHSuY6KMkVA4DElFhOm8&s=10"
                alt=""
              />
            </a>
            <a href="https://olotsomsa.com/" target="blank">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlOHgnRYiPsdg8B5OxeHt_g7i2IjOdu26cEGKNv72IfSm_pEeJParfc2N&s=10"
                alt=""
              />
            </a>

            <a href="https://safiabakery.uz/ru">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/76/12/d9/safia.jpg?w=500&h=-1&s=1"
                alt=""
              />
            </a>
            <a href="https://makromarket.uz/" target="blank">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNgrzqZBmorBKXoi5533tAh-sj6LnDydeg8NlG_aBKLOH8riG_32T_1c&s=10"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
