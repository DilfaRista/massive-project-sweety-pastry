import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaRegStar } from 'react-icons/fa';
import '../styles/setel.css';
import { useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const DetailHampers = () => {
    const [hamper, setHamper] = useState(null); // Hampers data
    const [quantity, setQuantity] = useState(1); // Quantity of the product
    const location = useLocation();

    // Extract hamper ID from query parameters
    const query = new URLSearchParams(location.search);
    const hamperId = query.get('id');

    useEffect(() => {
        console.log('Fetching hamper with ID:', hamperId);
        axios.get(`http://localhost:8081/hampers/${hamperId}`)
            .then(response => {
                console.log('Response data:', response.data);
                setHamper(response.data);
            })
            .catch(error => {
                console.error('Error fetching hamper:', error);
                // Tampilkan pesan error yang lebih spesifik kepada pengguna
            });
    }, [hamperId]);
    

    const ulasan = [
        {
            name: 'Anita',
            desc: 'Hampers-nya sangat menarik dan berisi berbagai macam produk yang berkualitas. Packagingnya juga cantik dan rapi. Namun, saya berharap ada lebih banyak variasi produk di dalamnya.',
            rating: 4,
        },
        {
            name: 'Bayu',
            desc: 'Luar biasa! Hampers-nya sangat istimewa dan berisi produk-produk yang lezat. Setiap produk memiliki rasa yang kaya dan seimbang. Pengirimannya juga cepat dan packagingnya elegan. Saya sangat merekomendasikannya!',
            rating: 5,
        },
        {
            name: 'Akagi',
            desc: 'Hampers-nya enak dan berkualitas, cocok untuk hadiah acara keluarga. Isinya cukup otentik dan tidak terlalu manis. Namun, harganya sedikit mahal dibandingkan dengan hampers sejenis.',
            rating: 4,
        },
        {
            name: 'Ameri',
            desc: 'Isi hampers cukup enak, tetapi tidak ada yang istimewa. Produknya terasa biasa saja dan tidak terlalu berbeda dari hampers lain yang pernah saya coba. Harganya cukup terjangkau, tetapi saya berharap ada peningkatan dalam variasi produk.',
            rating: 3,
        },
        {
            name: 'Chika',
            desc: 'Hampers-nya sangat enak dan beragam, saya suka sekali dengan berbagai pilihan produk di dalamnya. Produknya tidak terlalu manis, pas untuk dinikmati bersama teh atau kopi. Namun, pengirimannya sedikit terlambat dari yang dijanjikan.',
            rating: 4,
        },
    ];
    

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    };

    const calculateMedianRating = () => {
        if (ulasan.length === 0) return 0;

        const ratings = ulasan.map(review => review.rating).sort((a, b) => a - b);
        const mid = Math.floor(ratings.length / 2);

        return ratings.length % 2 !== 0 ? ratings[mid] : ((ratings[mid - 1] + ratings[mid]) / 2).toFixed(1);
    };

    if (!hamper) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p className="mt-3">Loading...</p>
            </Container>
        );
    }

    return (
        <Container>
            <Row className="p-2 m-5">
                <Col>
                    <div className="text-center">
                        <img src={`http://localhost:8081/${hamper.hampers_img}`} style={{ objectFit: 'cover', width: '100%', padding: '0' }} alt={hamper.name_hampers} />
                    </div>
                </Col>
                <Col className="ps-5">
                    <div>
                        <div>
                            <h1>{hamper.name_hampers}</h1>
                            <p style={{ fontWeight: "bold" }}>{formatCurrency(hamper.price)}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column">
                                <p>Review</p>
                            </div>
                            <div className="d-flex flex-row">
                                <Rating
                                    initialRating={calculateMedianRating()}
                                    readonly
                                    emptySymbol={<FaRegStar style={{ color: '#ffd700' }} />}
                                    fullSymbol={<FaStar style={{ color: '#ffd700' }} />}
                                />
                                <p className="ms-2">{calculateMedianRating()}</p>
                            </div>
                        </div>
                        <div>
                            <p style={{ fontSize: "12px" }}>{hamper.hampers_desc}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: "12px" }}>Isi Kue = {hamper.isi_kue}</p>
                        </div>
                        <div>
                            <p className="d-flex flex-column"></p>
                            <div
                                className="d-flex flex-row align-items-center"
                                style={{ width: '156px', height: '47px' }}
                            >
                                <Button
                                    className="text-white h-100"
                                    style={{ width: '45px', outline: 'none', border: 'none', padding: '0', margin: '0', backgroundColor: '#606c38', borderRadius: '10px 0 0 10px' }}
                                    onClick={handleDecrease}
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
                                    onClick={handleIncrease}
                                >
                                    +
                                </Button>
                            </div>
                            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
                                {formatCurrency(hamper.price * quantity)}
                            </p>
                            <div>
                                <Container style={{ padding: '0' }}>
                                    <div className="pe-5">
                                        <Button style={{ marginRight: '2rem', color: '#606c38', outline: '#606c38', borderColor: '#606c38', backgroundColor: '#ffff' }}>Tambah Ke Keranjang</Button>
                                        <a href="/ReqHampers" style={{ border: 'none', backgroundColor: '#606c38', textDecoration: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}>Pesan Sekarang</a>

                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div id='ulasan-box' style={{ display: 'block', padding: '0', margin: '0' }}>
                <p>Ulasan</p>
                <hr></hr>
            </div>
            <Row>
                <Col>
                    <Card style={{ border: 'none', outline: 'none' }}>
                        {ulasan.map((review, index) => (
                            <Card.Body key={index}>
                                <Card.Title>{review.name}</Card.Title>
                                <Rating
                                    initialRating={review.rating}
                                    readonly
                                    emptySymbol={<FaRegStar style={{ color: '#ffd700' }} />}
                                    fullSymbol={<FaStar style={{ color: '#ffd700' }} />}
                                />
                                <Card.Text>{review.desc}</Card.Text>
                                <hr></hr>
                            </Card.Body>
                        ))}
                    </Card>
                </Col>
                <Col id='kolom-akhir' className='d-flex justify-content-center'>
                    <div className='d-flex flex-row'>
                        <div >
                            <Rating style={{ padding: '1.4rem' }}
                                initialRating={calculateMedianRating()}
                                readonly
                                emptySymbol={<FaRegStar style={{ color: '#ffd700', fontSize: '40px' }} />}
                                fullSymbol={<FaStar style={{ color: '#ffd700', fontSize: '40px' }} />}
                            />
                        </div>
                        <div>
                            <p>{calculateMedianRating()}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailHampers;
