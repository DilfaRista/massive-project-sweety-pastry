// import React from 'react';
// // import '../styles/Login.css';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h1>Login</h1>
//         <form
//           action="#"
//           method="post"
//         >
//           <label htmlFor="username">Nama Pengguna</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             defaultValue=""
//             required
//           />

//           <label htmlFor="password">Kata Sandi</label>
//           <div className="password-container">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               defaultValue=""
//               required
//             />
//             <span className="toggle-password"></span>
//           </div>

//           <button type="submit">Login</button>
//         </form>
//         <p>
//           Belum Memiliki Akun? <a href="Register">Daftar</a>
//         </p>
//       </div>
//       <div className="logo-container">
//         <img
//           src="./logo.png"
//           alt="Sweety Pastry"
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Container className="login-container" style={{backgroundColor:'#fefae0', padding:'1rem 5rem 1rem 5rem', margin:'0', maxWidth:'none'}}>
        <Row style={{paddingTop:'3rem'}}>
          <Col className="login-form p-5">
            <h1 style={{ paddingLeft: '1.4rem', fontFamily: 'jua' }}>Daftar</h1>
            <Form style={{ paddingTop: '1rem', boxShadow: 'none', backgroundColor:'#fefae0' }}>
              <Form.Group controlId="username">
                <Form.Label>Nama Pengguna</Form.Label>
                <Form.Control style={{ marginBottom: '2rem', padding:'1rem', borderRadius:'10px' }} type="text" placeholder="Masukkan nama pengguna" required />
              </Form.Group>

              <Form.Group controlId="password" style={{ paddingBottom: '2rem' }}>
                <Form.Label>Kata Sandi</Form.Label>
                <div className="password-container">
                  <Form.Control type="password" style={{padding:'1rem', borderRadius:'10px'}} placeholder="Masukkan kata sandi" required />
                  <span className="toggle-password"></span>
                </div>
              </Form.Group>

              <Button variant="primary" style={{ backgroundColor: ' #6b8e23', border: 'none' }} type="submit">Daftar</Button>
            </Form>
          </Col>
          <Col className="logo-container d-flex align-items-center justify-content-center">
            <Image style={{borderRadius:'50px'}} src="./logo.png" alt="Sweety Pastry" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;

