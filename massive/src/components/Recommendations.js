import React from 'react';

const Recommendations = () => {
  return (
    <section className="recommendations">
      <h2>Rekomendasi Kue kering</h2>
      <div className="product-list">
        <div className="product">
          <img
            src="../Nastar.png"
            alt="Nastar"
          />
          <h3>Nastar</h3>
          <p>
            Rp.75.000
            <br />
            Berat: 250 gram
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="product">
          <img
            src="./Coklat-Kacang.png"
            alt="Cokelat Kacang"
          />
          <h3>Cokelat Kacang</h3>
          <p>
            Rp.60.000
            <br />
            Berat: 250 gram
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="product">
          <img
            src="./Sagu-Keju-Susu.png"
            alt="Sagu Keju Susu"
          />
          <h3>Sagu Keju Susu</h3>
          <p>
            Rp.50.000
            <br />
            Berat: 250 gram
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
