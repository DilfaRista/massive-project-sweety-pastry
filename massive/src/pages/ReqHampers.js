import React from 'react';
import '../styles/ReqHampers.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/Req.css';

const ReqHampers = () => {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <section className="products">
          <Product
            imgSrc="./nastar-katalog.png"
            title="Nastar"
            description="Nastar adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="./Cookies.png"
            title="Cookies"
            description="Cookies adalah Cookies dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="./Kue-Semprong.png"
            title="Kue Semprong"
            description="Kue semprong adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="./Kue-Keju-Strawberry.png"
            title="Kue Keju Strawberry"
            description="Kue keju strawberry adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="./Kastengel.png"
            title="Kastengel"
            description="Kastengel adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="./Putri-Salju.png"
            title="Putri Salju"
            description="Putri salju adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="./kue-lidahkucing.png"
            title="Kue Lidah Kucing"
            description="Kue lidah kucing adalah kudapan mungil nan renyah yang terbuat dari bahan sederhana seperti tepung terigu, gula halus, mentega, telur, dan vanili."
          />
          <Product
            imgSrc="./kue-bijiketapang.png"
            title="Kue Biji Ketapang"
            description="Kue biji ketapang adalah camilan tradisional khas Betawi yang terkenal dengan bentuknya yang mungil menyerupai biji ketapang."
          />
          <Product
            imgSrc="./kue-bawang.png"
            title="Kue Bawang"
            description="Kue bawang adalah camilan gurih dan renyah yang populer di Indonesia."
          />
        </section>
        <Link to="/Keranjang" className="order-button">
          Pesan Sekarang
        </Link>
      </main>
      <Footer />
    </div>
  );
};

const Product = ({ imgSrc, title, description }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="product-container">
      <input type="checkbox" className="checkbox" onChange={handleCheckboxChange} />
      <div className={`product ${isChecked? 'checked' : ''}`}>
        <img src={imgSrc} alt={title} />
        <h2>{title}</h2>
        <p>Berat: 250 gram</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReqHampers;
