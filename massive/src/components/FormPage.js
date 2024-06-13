// FormPage.js
import React from 'react';
import '../styles/FormPage.css';

const FormPage = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img
              src="../asset/logo.png"
              alt="Sweety Pastry"
            />
          </div>
          <ul>
            <li>
              <a href="home.html">Beranda</a>
            </li>
            <li>
              <a href="produk.html">Produk</a>
            </li>
            <li>
              <a href="hampers.html">Hampers</a>
            </li>
          </ul>
          <div className="icons">
            <span>
              <i className="bi bi-toggle2-off"></i>
            </span>
            <span>
              <i className="bi bi-cart"></i>
            </span>
            <a href="login.html">
              <span>
                <i className="bi bi-person-circle"></i>
              </span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <form id="requestForm">
          <label htmlFor="perihal">Perihal:</label>
          <select
            id="perihal"
            name="perihal"
            required
          >
            <option value="">Pilih Perihal</option>
            <option value="Pernikahan">Pernikahan</option>
            <option value="Wisuda">Wisuda</option>
            <option value="Lebaran">Lebaran</option>
            <option value="Ulang-Tahun">Ulang Tahun</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <label htmlFor="request">Request kata kata:</label>
          <textarea
            id="request"
            name="request"
            rows="4"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>

      <footer>
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
    </>
  );
};

export default FormPage;
