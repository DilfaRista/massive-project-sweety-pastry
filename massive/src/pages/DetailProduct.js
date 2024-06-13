import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaRegStar } from 'react-icons/fa';
import '../styles/setel.css';

const DetailProduct = ({ match }) => {
    const [product, setProduct] = useState(null);
    const [quantities, setQuantities] = useState(1); // Misalnya kita punya 1 produk dalam contoh ini

    // Ulasan dummy
    const ulasan = [
        {
            name: 'Anita',
            desc: 'Kuenya enak dengan tekstur yang lembut. Rasa manisnya pas dan tidak berlebihan. Packagingnya juga menarik dan rapi. Hanya saja, variasi rasanya bisa lebih banyak lagi.',
            rating: 3.5,
        },
        {
            name: 'Bayu',
            desc: 'Luar biasa! Kuenya benar-benar lezat dan meleleh di mulut. Setiap gigitan penuh dengan rasa yang kaya dan seimbang. Pengirimannya juga cepat dan packagingnya elegan. Saya sangat merekomendasikannya!',
            rating: 5,
        },
        {
            name: 'Akagi',
            desc: 'Kuenya enak dan lembut, cocok untuk acara keluarga. Rasanya cukup otentik dan tidak terlalu manis. Namun, harganya sedikit mahal dibandingkan dengan produk sejenis.',
            rating: 5,
        },
        {
            name: 'Ameri',
            desc: 'Rasanya cukup enak, tetapi tidak ada yang istimewa. Kue ini terasa biasa saja dan tidak terlalu berbeda dari kue lain yang pernah saya coba. Harganya cukup terjangkau, tetapi saya berharap ada peningkatan dalam rasa dan tekstur.',
            rating: 3,
        },
        {
            name: 'Chika',
            desc: 'Kuenya sangat enak dan saya suka sekali dengan teksturnya yang lembut. Rasanya tidak terlalu manis, pas untuk dinikmati bersama teh atau kopi. Namun, pengirimannya sedikit terlambat dari yang dijanjikan.',
            rating: 4,
        },
    ];

    useEffect(() => {
        // Fetch data produk dari API
        const productId = new URLSearchParams(window.location.search).get('id'); // Assuming the URL contains ?id=<product_id>
        axios.get(`http://localhost:8081/product/${productId}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the product!', error);
            });
    }, []);

    const handleDecrease = () => {
        if (quantities > 1) {
            setQuantities(quantities - 1);
        }
    };

    const handleIncrease = () => {
        setQuantities(quantities + 1);
    };

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    };

    const calculateMedianRating = () => {
        if (ulasan.length === 0) return 0;

        const ratings = ulasan.map(ulasan => ulasan.rating).sort((a, b) => a - b);
        const mid = Math.floor(ratings.length / 2);

        return ratings.length % 2 !== 0 ? ratings[mid] : ((ratings[mid - 1] + ratings[mid]) / 2).toFixed(1);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Row className="p-2 m-5">
                <Col>
                    <div className="text-center">
                        <img src={`http://localhost:8081/${product.img_product}`} style={{ objectFit: 'cover', width: '100%', padding: '0' }} alt={product.name_product} />
                    </div>
                </Col>
                <Col className="ps-5">
                    <div>
                        <div>
                            <h1>{product.name_product}</h1>
                            <p style={{ fontWeight: "bold" }}>{formatCurrency(product.price)}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column">
                                <p>Review</p>
                            </div>
                            <div className="d-flex flex-row">
                                <Rating
                                    initialRating={product.rating}
                                    readonly
                                    emptySymbol={<FaRegStar style={{ color: '#ffd700' }} />}
                                    fullSymbol={<FaStar style={{ color: '#ffd700' }} />}
                                />
                                <p className="ms-2">{product.rating}</p>
                            </div>
                        </div>
                        <div>
                            <p style={{ fontSize: "12px" }}>{product.desc_product}</p>
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
                                    {quantities}
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
                                {formatCurrency(product.price * quantities)}
                            </p>
                            <div>
                                <Container style={{ padding: '0' }}>
                                    <div className="pe-5">
                                        <Button style={{ marginRight: '2rem', color: '#606c38', outline: '#606c38', borderColor: '#606c38', backgroundColor: '#ffff' }}>Tambah Ke Keranjang</Button>
                                        <Button style={{ border: 'none', backgroundColor: '#606c38' }}>Pesan Sekarang</Button>
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
                        {ulasan.map((ulasan, index) => (
                            <Card.Body key={index}>
                                <Card.Title>{ulasan.name}</Card.Title>
                                <Rating
                                    initialRating={ulasan.rating}
                                    readonly
                                    emptySymbol={<FaRegStar style={{ color: '#ffd700' }} />}
                                    fullSymbol={<FaStar style={{ color: '#ffd700' }} />}
                                />
                                <Card.Text>{ulasan.desc}</Card.Text>
                                <hr></hr>
                            </Card.Body>
                        ))}
                    </Card>
                </Col>
                <Col id='kolom-akhir' className='d-flex justify-content-center'>
                    <div className='d-flex flex-row'>
                        <div>
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

export default DetailProduct;
