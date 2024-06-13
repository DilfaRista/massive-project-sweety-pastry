import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = ({ onToggleMode }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    const newToggleState = !isToggled;
    setIsToggled(newToggleState);
    onToggleMode(newToggleState);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img
            src="./logo.png"
            alt="Sweety Pastry"
          />
        </div>
        <ul>
          <li>
          <Link to="Beranda">Beranda</Link>
          </li>
          <li>
          <Link to="Product">Produk</Link>
          </li>
          <li>
          <Link to="Hampers">Hampers</Link>
          </li>
        </ul>
        <div className="icons">
          <span onClick={handleToggle}>
            <i className={`bi ${isToggled ? 'bi-toggle2-on' : 'bi-toggle2-off'}`}></i>
          </span>
          <a href="Keranjang">
            <span>
              <i className="bi bi-cart"></i>
            </span>
          </a>
          <a href="Login">
            <span>
              <i className="bi bi-person-circle"></i>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
