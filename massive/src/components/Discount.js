import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Discount.css';

const Discount = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mengambil data produk dari API
    axios.get('http://localhost:8081/product')
      .then(response => {
        const firstThreeProducts = response.data.slice(0, 2);
        setProducts(firstThreeProducts);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <section className="discount" style={{ background: '#bc6c25' }}>
      <div class="discount-container text-white">
        <h2 class="discount-title">Dapatkan Potongan Harga 20%</h2>
        <p class="discount-description">Kepala Pusing Karena Dompet Kering? <br></br>Jangan Lewatkan Penawaran Terbaik Kami, <br></br>Nikmati Promo 20% Untuk Produk Pilihan</p>
      </div>
      <div className="promo-products">
        {products.map((product, index) => (
          <div key={index} className="promo-product">
            <img style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover'
            }} src={`http://localhost:8081/${product.img_product}`} alt={product.name_product} />
            <p>
              {product.name_product}
              <br />
              Rp.{(product.price * 0.8).toLocaleString()} <span>Rp.{product.price.toLocaleString()}</span>
            </p>
            <Link to="/bayar" style={{ background: "rgb(107, 142, 35)", color: "white", padding: '0.7rem', borderRadius: '10px' }}>Beli Sekarang</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discount;
