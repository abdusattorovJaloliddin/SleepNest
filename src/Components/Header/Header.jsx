import { useState } from "react";
import "./Header.css";
import Logo from "./images/logo.png";
import { FaHeart } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <a href="#" className="header-links">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className={`header-list ${isMenuOpen ? "active" : ""}`}>
            <li className="header-item">
              <a href="#" className="header-link">
                {" "}
                Bosh sahifa
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                To'plam
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Biz haqimizda
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Kontaktlar
              </a>
            </li>
          </ul>
          <div className="header-right">
            <span className="header-span">
              <FaHeart size={30} color="red" />
              <select name="language" id="Language">
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
                <option value="en">En</option>
              </select>
            </span>
            <div className="hamburger" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
