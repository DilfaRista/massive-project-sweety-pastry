import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';


const Product = ({ product, quantity, onDecrease, onIncrease, onSelect, isSelected }) => {
  const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  };

  return (
    <div className="d-flex flex-row flex-grow-1 text-left" style={{ background: isSelected ? '#f0f0f0' : 'none', transition:'0.2s', marginTop:'1rem', padding:'1rem'}}>
      <Form.Check
        type="checkbox"
        id={`checkbox-${product.name}`}
        checked={isSelected}
        onChange={onSelect}
      />
      <img
        src={product.imgSrc}
        alt={product.alt}
        style={{ objectFit: 'fill', width: '50%', height: '200px', borderRadius:'20px' }}
      />
      <div className="isi-tulisan d-flex flex-column ps-2 justify-content-between">
        <div className="isi-o d-flex flex-column">
          <h1>{product.name}</h1>
          <p>Berat Kue {product.weight}</p>
        </div>
        <FaTrash style={{ width: '15px', height: '20px' }} />
        <div className="d-flex flex-column pe-3">
          <div className="jumlah">
            <p className="d-flex flex-column">Jumlah</p>
            <div
              className="d-flex flex-row align-items-center border"
              style={{ width: '156px', height: '47px' }}
            >
              <Button
                className="text-white h-100"
                style={{ width: '45px', outline: 'none', border: 'none', padding: '0', margin: '0', backgroundColor: '#606c38', borderRadius: '10px 0 0 10px' }}
                onClick={onDecrease}
              >
                -
              </Button>
              <span
                className="flex-grow-1 h-100 d-flex justify-content-center align-items-center"
                style={{ backgroundColor: '#8f9873' }}
              >
                {quantity}
              </span>
              <Button
                className="text-white h-100"
                style={{ width: '45px', outline: 'none', border: 'none', padding: '0', margin: '0', backgroundColor: '#606c38', borderRadius: '0 10px 10px 0' }}
                onClick={onIncrease}
              >
                +
              </Button>
            </div>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
              {formatCurrency(product.price * quantity)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HalamanKeranjang = () => {
  const [quantities, setQuantities] = useState([1, 1]); // Misalnya kita punya 2 produk
  const [selectedProducts, setSelectedProducts] = useState([false, false]); // Status checkbox
  const products = [
    {
      imgSrc: './Nastar.png',
      alt: 'Nastar',
      link: '../detailpages/PageNastar.html',
      name: 'Nastar',
      price: 75000,
      weight: '250 gram',
    },
    {
      imgSrc: './Cookies.png',
      alt: 'Cookies',
      link: '../detailpages/PageLidahKucing.html',
      name: 'Cookies',
      price: 50000,
      weight: '200 gram',
    },
  ];

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleSelect = (index) => {
    const newSelectedProducts = [...selectedProducts];
    newSelectedProducts[index] = !newSelectedProducts[index];
    setSelectedProducts(newSelectedProducts);
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  };

  const subtotal = products.reduce((acc, product, index) => {
    return acc + (selectedProducts[index] ? product.price * quantities[index] : 0);
  }, 0);

  const shippingCost = 0; // Ongkos kirim bisa diatur sesuai kebutuhan
  const total = subtotal + shippingCost;

  return (
    <div>
      {/* <Header /> */}
      <main className="container-fluid pe-5 ps-5">
        <Container className="d-flex flex-column" style={{minWidth:'630px'}}>
          <div>
            <h1 style={{ fontFamily: 'jua', color: '#bc6c25', paddingTop: '1rem' }}>Keranjang</h1>
          </div>
          <hr />
          <Row className="d-flex flex-row p-5 mb-2">
            <Col md={9} className="d-flex flex-row">
              <form className='m-2 p-2'>
                {products.map((product, index) => (
                  <Product
                    key={index}
                    product={product}
                    quantity={quantities[index]}
                    onDecrease={() => handleDecrease(index)}
                    onIncrease={() => handleIncrease(index)}
                    onSelect={() => handleSelect(index)}
                    isSelected={selectedProducts[index]}
                  />
                ))}
              </form>
            </Col>
            <Col
              md={3}
              className="ps-1"
              style={{ borderLeft: '2px solid black', padding: '2px' }}
            >
              <p
                className="text-center"
                style={{ fontSize: '30px', fontWeight: 'bold' }}
              >
                Rincian
              </p>
              <div className="total d-flex flex-row justify-content-between">
                <div className="text-total d-flex flex-column">
                  <p className="text-left">Total Sementara</p>
                  <p className="text-left">Ongkos Kirim</p>
                  <p className="text-left">Total</p>
                </div>
                <div className="text-total d-flex flex-column">
                  <p className="text-left">{formatCurrency(subtotal)}</p>
                  <p className="text-left">{formatCurrency(shippingCost)}</p>
                  <p className="text-left">{formatCurrency(total)}</p>
                </div>
              </div>
              
              <Link to="/Kartu" className="order-button">Beli</Link>
              {/* <Button
              
                className="text-white w-100 text-center align-items-center justify-content-center"
                style={{ backgroundColor: '#606c38', paddingTop: '1rem', paddingBottom: '1rem', borderRadius: '10px', border: 'none', fontSize: 'large' }}
              >
                PESAN
              </Button> */}
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default HalamanKeranjang;
