import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RiwayatPesanan() {
  return (
    <div>
      <Header />

      <main className="container-fluid pe-5 ps-5">
        <Container className="flex-column">
          <div>
            <h1
              style={{
                fontFamily: 'jua',
                color: '#bc6c25',
                paddingTop: '1rem',
              }}
            >
              Keranjang
            </h1>
          </div>
          <hr />
          <div className="tabble">
            <Table hover>
              <thead style={{ background:'#DDA15E', color: 'white' }}>
                <tr>
                  <th>Tanggal</th>
                  <th>Nama Produk</th>
                  <th>Harga</th>
                  <th>No Resi</th>
                  <th>Status Pesanan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/04/2024</td>
                  <td>Nastar</td>
                  <td>Rp 75.000</td>
                  <td>JNT237484</td>
                  <td>Dalam Pengemasan</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default RiwayatPesanan;
