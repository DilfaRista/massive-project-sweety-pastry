// src/components/Footer.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const Footer = () => {
  return (
    <footer className='text-white' style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sweety Pastry</h3>
          <p>"Nikmati Kelezatan Kue Kering Homemade di Setiap Gigitan! Selamat berbelanja"</p>
        </div>
        <div className="footer-section">
          <h3>Hubungi Kami</h3>
          <p>
            <i className="bi bi-whatsapp"></i> +62 1234 5678 910
          </p>
          <p>
            <i className="bi bi-instagram"></i> sweet_pasty
          </p>
        </div>
        <div className="footer-section">
          <h3>Tentang Kami</h3>
          <p>Bekasi, Jawa Barat, Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
