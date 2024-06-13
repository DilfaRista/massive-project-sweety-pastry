import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const KartuUcapan = () => {
    const navigate = useNavigate();


    const handleButtonClick = () => {
        navigate(`/HalamanPembelian`);
    };
    return (
        <>
            <Container style={{ marginTop: '3rem', maxwidth: 'none', borderRadius: '40px' }}>
                <Row>
                    <Col>
                        <Form style={{ paddingTop: '2rem' }}>
                            <Form.Group controlId="opsiPengiriman" style={{ padding: '1rem 0' }}>
                                <Form.Label style={{ fontSize: '1rem' }}>Perihal</Form.Label>
                                <Form.Select>
                                    <option>Tuliskan</option>
                                    <option value="standard">Pernikahan</option>
                                    <option value="express">Wisuda</option>
                                    <option value="overnight">Arisan</option>
                                    <option value="overnight">Ulang Tahun</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="text-area" style={{ paddingBottom: '2rem', fontSize: '1rem' }}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Tuliskan Kata-Katanya</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form.Group>
                            <div className='buton text-end' style={{ display: 'block' }}>
                                <Button
                                    onClick={() => handleButtonClick()} className='text-center' variant="primary" style={{ padding: '0.6rem 3rem', backgroundColor: ' #6b8e23', border: 'none' }} type="submit">Submit</Button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default KartuUcapan