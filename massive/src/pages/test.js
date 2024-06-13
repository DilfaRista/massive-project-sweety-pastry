import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = ({ user }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={`http://localhost:8081/${user.img_profile}`} alt={user.name} />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    Email: {user.email}
                    <br />
                    Nomor Telepon: {user.nomor_telp}
                    <br />
                    ID Transaksi: {user.id_transaksi}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

const TestComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <Container>
            <Row>
                {users.map(user => (
                    <Col key={user.id}>
                        <UserCard user={user} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TestComponent;
