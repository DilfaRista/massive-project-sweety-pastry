import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8081/login', {
        name: username,
        password: password
      });
      // Save token to localStorage or context
      localStorage.setItem('token', response.data.token);
      // Redirect or update state
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <>
      <Container className="login-container" style={{ backgroundColor: '#fefae0', padding: '1rem 5rem', margin: '0', maxWidth: 'none' }}>
        <Row style={{ paddingTop: '3rem' }}>
          <Col className="login-form p-5">
            <h1 style={{ paddingLeft: '1.4rem', fontFamily: 'jua' }}>Masuk</h1>
            <Form onSubmit={handleLogin} style={{ paddingTop: '1rem', paddingLeft: '0', boxShadow: 'none', backgroundColor: '#fefae0' }}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Form.Group controlId="username">
                <Form.Label>Nama Pengguna</Form.Label>
                <Form.Control
                  style={{ marginBottom: '2rem', padding: '1rem', borderRadius: '10px' }}
                  type="text"
                  placeholder="Masukkan nama pengguna"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password" style={{ paddingBottom: '2rem' }}>
                <Form.Label>Kata Sandi</Form.Label>
                <div className="password-container">
                  <Form.Control
                    type="password"
                    style={{ padding: '1rem', borderRadius: '10px' }}
                    placeholder="Masukkan kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="toggle-password"></span>
                </div>
              </Form.Group>

              <Button variant="primary" style={{ backgroundColor: ' #6b8e23', border: 'none' }} type="submit">Masuk</Button>
            </Form>
            <p style={{ paddingLeft: '1.4rem' }}>
              Belum Memiliki Akun? <a href="Register" style={{ color: '#a8a872' }}>Daftar</a>
            </p>
          </Col>
          <Col className="logo-container d-flex align-items-center justify-content-center">
            <Image style={{ borderRadius: '50px' }} src="./logo.png" alt="Sweety Pastry" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
