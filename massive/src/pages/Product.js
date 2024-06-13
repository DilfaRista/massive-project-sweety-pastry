import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const formatCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products data from server or API
    axios.get('http://localhost:8081/product')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name_product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleButtonClick = (productId) => {
    navigate(`/DetailProduct?id=${productId}`);
  };

  return (
    <div>
      {/* <Header /> */}
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Cari..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </Col>
          <Col md={2}>
            <Button variant="primary" onClick={() => { }} style={{ background: "#606c38", border: 'none', outline: 'none' }}>Cari</Button>
          </Col>
        </Row>

        <div>
          <h1 className='text-center' style={{ fontFamily: 'jua', padding: '2rem' }}>Pilihan Produk</h1>
        </div>
      </Container>
      <main>
        <Container>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
              <ClipLoader size={150} color={"#bc6c25"} loading={loading} />
            </div>
          ) : (
            <Row>
              {filteredProducts.map((product, index) => (
                <Col md={4} key={index} className="my-2">
                  <Card className='p-2' style={{ width: '18rem', background: '#DDA15E' }}>
                    <Card.Img
                      variant="top"
                      src={`http://localhost:8081/${product.img_product}`}
                      alt={product.img_product}
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                    <Card.Body>
                      <Card.Title><a href="#" style={{ color: '#bc6c25', fontFamily: 'jua' }}>{product.name_product}</a></Card.Title>
                      <Card.Text>
                        Harga : {formatCurrency(product.price)}
                        <br />
                        Berat : {product.weight} gram
                      </Card.Text>
                      <Button
                        onClick={() => handleButtonClick(product.id_product)}
                        variant="primary" style={{ background: '#6b8e23', border: 'none', outline: 'none' }}>Tambahkan ke keranjang</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              {/* "#bc6c25" */}
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
