import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1 style={{fontFamily:'jua'}}>Sweety Pastry</h1>
      <p>"Nikmati Kelezatan Kue Kering Homemade di Setiap Gigitan! Selamat berbelanja"</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari..."
        />
        <button>Cari</button>
      </div>
    </section>
  );
};

export default Hero;
