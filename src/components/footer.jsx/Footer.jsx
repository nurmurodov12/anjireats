import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <h3>Even easier in the app</h3>

            <div className="mobile">
              <div className="apple">
                <i class="fa-brands fa-apple"></i>
                <p>App Store</p>
              </div>

              <div className="play">
                <i class="fa-brands fa-google-play"></i>
                <p>Play Store</p>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <h3>Company information</h3>

            <div className="footer-info">
              {" "}
              <ul>
                <li>User agreement</li>
                <li>Contact</li>
                <li>Delivery</li>
                <li>Become a partner</li>
                <li>Become a courier</li>
                <li>Eats for Business</li>
              </ul>
              <ul>
                <li>Plastic recycling</li>
                <li>order food in the Yandex Go app</li>
                <li>
                  <i class="fa-solid fa-envelope"></i>Feedback
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
