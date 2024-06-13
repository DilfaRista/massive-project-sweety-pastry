import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import '../styles/Pembayaran.css'; // Import CSS file
import { FaCheck } from 'react-icons/fa';

const Pembayaran = () => {
    const [showModal, setShowModal] = useState(false);

    const handleBayarClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Container style={{ fontFamily: 'jua' }}>
                <Row className="d-flex mt-5">
                    <Col className="d-flex flex-column me-5" style={{ backgroundColor: '#DDA15E', padding: '2rem', borderRadius: '20px' }}>
                        <div className="Rincian">
                            <h2 style={{ fontWeight: 'bolder' }}>Rincian Pesanan</h2>
                            <h3 style={{ fontWeight: 'bolder' }}>Produk</h3>
                        </div>
                        <div className="d-flex flex-row justify-content-between Uraian">
                            <div className="d-flex flex-column ">
                                <p>Hampers Premium 2</p>
                            </div>
                            <div>
                                <p> Rp 250.000</p>
                            </div>
                        </div>
                        <div>
                            <ol className="d-flex flex-column">
                                <li>*Nastar</li>
                                <li>*Cookies</li>
                                <li>*Kartu Ucapan</li>
                            </ol>
                        </div>
                        <hr></hr>
                        <p>Opsi Pengiriman</p>
                        <div className="d-flex flex-row justify-content-between Uraian">
                            <div className="d-flex flex-column ">
                                <p>Gosend</p>
                            </div>
                            <div>
                                <p> Rp 250.000</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex flex-row justify-content-between Uraian">
                            <div className="d-flex flex-column ">
                                <p>Biaya Layanan</p>
                            </div>
                            <div>
                                <p> Rp 3.000</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex flex-row justify-content-between Uraian">
                            <div className="d-flex flex-column ">
                                <p style={{ fontWeight: 'bolder' }}>Total Pembayaran</p>
                            </div>
                            <div>
                                <p style={{ fontWeight: 'bolder' }}> Rp 268.000</p>
                            </div>
                        </div>
                    </Col>

                    <Col className="d-flex flex-column me-5" style={{ backgroundColor: '#DDA15E', padding: '2rem', borderRadius: '20px' }}>
                        <div className="Rincian">
                            <h2 style={{ fontWeight: 'bolder' }}>Rincian Metode Pembayaran</h2>
                        </div>
                        <p>Opsi Pengiriman</p>
                        <div className="d-flex flex-column Uraian">
                            <div className="d-flex">
                                <p>Nomor Resi Pengiriman : </p>
                            </div>
                            <div>
                                <p> JNT237484</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex flex-column Uraian">
                            <div className="d-flex">
                                <p>BRI</p>
                            </div>
                            <div>
                                <p> Virtual Account : 1234 5678 9876 5432</p>
                            </div>
                        </div>
                        <hr></hr>
                    </Col>
                </Row>
            </Container>
            <div>
                <Container className='text-center justify-content-center align-item-center'>
                    <div className="pe-5 pt-2 ">
                        <Button style={{ marginRight: '2rem', padding: '0.5rem 4rem', color: '#6b8e23', outline: '#6b8e23', borderColor: '#6b8e23', backgroundColor: '#ffff' }}>Batal</Button>
                        <Button onClick={handleBayarClick} style={{ padding: '0.5rem 4rem', border: 'none', backgroundColor: '#6b8e23' }}>Bayar</Button>
                    </div>
                </Container>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body className="custom-modal-body">
                    <FaCheck style={{ width: '150px', height: '150px', color:'white', border:'none', outline:'none' }} className="modal-circle" />
                    <div className="modal-title" style={{
                        fontSize: '17px'
                    }}>Rp268.000</div>
                    <div className="modal-subtitle" style={{
                        fontSize: '17px'
                    }}>Metode Pembayaran : BRI</div>
                    <div className="modal-info" style={{
                        fontSize: '17px'
                    }}>Virtual Akun : 1234 5678 9876 5432</div>
                    <div className="modal-info" style={{
                        fontSize: '17px'
                    }}>Nomor Resi Pengiriman : JNT237484</div>
                    <div className="modal-info" style={{
                        fontSize: '17px'
                    }}>Waktu & Tgl Pembayaran : 09:00 WIB 12-04-2024</div>
                    <hr className="modal-divider" />
                    <div className="modal-button-container">
                        <Button onClick={handleCloseModal} className="modal-button">Selesai</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Pembayaran;
