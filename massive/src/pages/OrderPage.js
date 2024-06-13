// OrderPage.js
import React from 'react';
import {Table} from 'react-bootstrap'
import '../styles/OrderPage.css';

const OrderPage = () => {
  return (
    <>
      <main>
        <h1 className='text-center' style={{fontFamily:'jua'}}>Pesanan Anda</h1>
        <Table hover>
          <thead>
            <tr>
              <th scope="col">Tanggal</th>
              <th scope="col">Nama Produk</th>
              <th scope="col">Harga</th>
              <th scope="col">Nomor Resi</th>
              <th scope="col">Status Pesanan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/04/2024</td>
              <td>Nastar</td>
              <td>Rp. 75.000</td>
              <td>JNT237484</td>
              <td>Dalam Pengemasan</td>
            </tr>
            <tr>
              <td>12/04/2024</td>
              <td>Putri Salju</td>
              <td>Rp. 70.000</td>
              <td>JNT237484</td>
              <td>Dalam Pengemasan</td>
            </tr>
            <tr>
              <td>03/04/2024</td>
              <td>Kue Semprong</td>
              <td>Rp. 25.000</td>
              <td>A0003</td>
              <td>Sudah Dikirim</td>
            </tr>
          </tbody>
        </Table>
      </main>
    </>
  );
};

export default OrderPage;
