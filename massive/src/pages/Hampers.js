import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';


const formatCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const Hampers = () => {
  const [hampers, setHampers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch hampers data from server or API
    axios.get('http://localhost:8081/hampers')
      .then(response => {
        setHampers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the hampers!', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredHampers = hampers.filter(hamper =>
    hamper.name_hampers.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleButtonClick = (hampersId) => {
    navigate(`/DetailHampers?id=${hampersId}`);
  };


  return (
    <div>
      {/* <Header /> */}
      <div className="search-bar">
        <Form.Control
          type="text"
          placeholder="Cari..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button variant="primary" onClick={() => { }} style={{ background: "#606c38", border: 'none', outline: 'none' }}>Cari</Button>
      </div>
      <div>
        <h1 className='text-center' style={{ fontFamily: 'jua', padding: '2rem' }}>Pilihan Hampers</h1>
      </div>
      <main>
        <Container className="">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
              <ClipLoader size={150} color={"#bc6c25"} loading={loading} />
            </div>
          ) : (
            <Row className="justify-content-center">
              {filteredHampers.map((hamper, index) => (
                <Col md={4} key={index} className="my-2">
                  <Card className='p-2' style={{ width: '18rem', background: '#DDA15E' }}>
                    <Card.Img
                      variant="top"
                      src={`http://localhost:8081/${hamper.hampers_img}`}
                      alt={hamper.name_hampers}
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                    <Card.Body>
                      <Card.Title>
                        <a href="#" style={{ color: '#bc6c25', fontFamily: 'jua' }}>{hamper.name_hampers}</a>
                      </Card.Title>
                      <Card.Text>
                        Harga: {formatCurrency(hamper.price)}
                        <br />
                        Isi kue: {hamper.isi_kue}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleButtonClick(hamper.id_hampers)}
                      >
                        Tambahkan ke keranjang{' '}
                        <span>
                          <i className="bi bi-cart"></i>
                        </span>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Hampers;
