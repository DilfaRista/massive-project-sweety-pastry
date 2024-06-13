const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Add this line
app.use('/store_img', express.static(path.join(__dirname, 'store_img')));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sweety"
});

app.get('/', (req, res) => {
    return res.json('From back end site');
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get('/product', (req, res) => {
    const sql = "SELECT * FROM product";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get('/hampers', (req, res) => {
    const sql = "SELECT * FROM hampers";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get('/hampers/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM hampers WHERE id_hampers = ?";
    db.query(sql, [id], (err, data) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        if (data.length === 0) return res.status(404).json({ message: 'Hampers not found' });
        return res.json(data[0]);
    });
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM product WHERE id_product = ?";
    db.query(sql, [id], (err, data) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        if (data.length === 0) return res.status(404).json({ message: 'Hampers not found' });
        return res.json(data[0]);
    });
});

// Add the login route
app.post('/login', (req, res) => {
    const { name, password } = req.body;

    const sql = "SELECT * FROM users WHERE name = ?";
    db.query(sql, [name], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.user_password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
        return res.json({ token });
    });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});
