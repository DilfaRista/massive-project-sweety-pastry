import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Spinner } from 'react-bootstrap'; // Import Spinner from react-bootstrap
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk menentukan apakah data sedang diload
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data produk dari API
    axios.get('http://localhost:8081/product')
      .then(response => {
        // Take only the first three products from the response
        const firstThreeProducts = response.data.slice(0, 3);
        setProducts(firstThreeProducts);
        setIsLoading(false); // Set isLoading menjadi false setelah data selesai diload
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const handleButtonClick = (productId) => {
    navigate(`/DetailProduct?id=${productId}`);
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  };

  return (
    <main>
      <h1 className='text-center' style={{ fontFamily: 'jua' }}>Rekomendasi Kue </h1>
      <section className="product-list-container">
        {/* Tampilkan animasi loading jika data sedang diload */}
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            <Spinner size={150} color={"#bc6c25"}>
            </Spinner>
          </div>
        ) : (
          <div className="product-list p-2">
            {products.map((product, index) => (
              <Card key={index} className="product-card p-2">
                <Card.Img
                  variant="top"
                  src={`http://localhost:8081/${product.img_product}`}
                  alt={product.name_product}
                  style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <Card.Body>
                  <Card.Title>
                    <a style={{ color: 'black' }} href={`/DetailProduct?id=${product.id_product}`}>{product.name_product}</a>
                  </Card.Title>
                  <Card.Text>
                    Harga : {formatCurrency(product.price)}
                    <br />
                    Berat : {product.weight}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleButtonClick(product.id_product)}
                  >
                    Tambahkan ke keranjang{' '}
                    <span>
                      <i className="bi bi-cart"></i>
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductList;
