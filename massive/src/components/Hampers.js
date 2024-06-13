// import React from 'react';

// const Hampers = () => {
//   return (
//     <section className="hampers">
//       <h2>Rekomendasi Hampers</h2>
//       <div className="hamper-list">
//         <div className="hamper">
//           <img
//             src="./Hampers1.png"
//             alt="Hampers PREMIUM 1"
//           />
//           <h3>Hampers PREMIUM 1</h3>
//           <p>
//             Rp.350.000
//             <br />
//             Isi: 6 kue
//           </p>
//           <a style={{color:'black'}} href="#">Lihat Selengkapnya</a>
//         </div>
//         <div className="hamper">
//           <img
//             src="./Hampers2.png"
//             alt="Hampers PLATINUM"
//           />
//           <h3>Hampers PLATINUM</h3>
//           <p>
//             Rp.450.000
//             <br />
//             Isi: 6 kue
//           </p>
//           <a style={{color:'black'}} href="#">Lihat Selengkapnya</a>
//         </div>
//         <div className="hamper">
//           <img
//             src="./Hampers3.png"
//             alt="Hamper MINIMALIS 1"
//           />
//           <h3>Hamper MINIMALIS 1</h3>
//           <p>
//             Rp.150.000
//             <br />
//             Isi: 3 kue
//           </p>
//           <a style={{color:'black'}} href="#">Lihat Selengkapnya</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hampers;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hampers = () => {
  const [hampers, sethampers] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch data produk dari API
    axios.get('http://localhost:8081/hampers')
      .then(response => {
        // Take only the first three hamperss from the response
        const firstThreehampers = response.data.slice(0, 3);
        sethampers(firstThreehampers);
      })
      .catch(error => {
        console.error('There was an error fetching the hamperss!', error);
      });
  }, []);

  const handleButtonClick = (hampersId) => {
    navigate(`/Detailhampers?id=${hampersId}`);
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  };

  return (
    <main>

      <h1 className='text-center' style={{fontFamily:'jua'}}>Rekomendasi Hampers </h1>
      <section className="product-list-container">
        <div className="product-list p-2">
          {hampers.map((hampers, index) => (
            <Card key={index} className="hampers-card">
              <Card.Img
                variant="top"
                src={`http://localhost:8081/${hampers.hampers_img}`}
                alt={hampers.name_hampers}
                style={{ width: '200px', height: 'auto', objectFit: 'cover', borderRadius: '10px', marginLeft: '1rem', marginTop: '1rem' }}
              />
              <Card.Body className='p-4'>
                <Card.Title>
                  <a style={{ color: 'black' }} href={`/Detailhampers?id=${hampers.id_hampers}`}>{hampers.name_hampers}</a>
                </Card.Title>
                <Card.Text>
                  Harga : {formatCurrency(hampers.price)}
                  <br />
                  Isi Kue : {hampers.isi_kue}
                </Card.Text>
                <Button className='ms-3'
                  variant="light" // Mengatur latar belakang menjadi kosong
                  style={{ color: "black" }} // Mengatur warna tulisan menjadi hitam
                  onClick={() => handleButtonClick(hampers.id_hampers)}
                >
                  Lihat Selengkapnya{' '}
                </Button>

              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hampers;
