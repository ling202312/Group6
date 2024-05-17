const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const logic = require('./logic');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', (req, res) => {
    logic.getAllUsers((error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});

app.get('/api/users/:id', (req, res) => {
    logic.getUserById(req.params.id, (error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results[0]);
    });
});

app.post('/api/users', (req, res) => {
    logic.createUser(req.body, (error, results) => {
        if (error) return res.status(500).send(error);
        res.json({ id: results.insertId });
    });
});

app.put('/api/users/:id', (req, res) => {
    logic.updateUser(req.params.id, req.body, (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.affectedRows > 0) {
            res.send('User updated successfully');
        } else {
            res.status(404).send('User not found');
        }
    });
});

app.delete('/api/users/:id', (req, res) => {
    logic.deleteUser(req.params.id, (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.affectedRows > 0) {
            res.send('User deleted successfully');
        } else {
            res.status(404).send('User not found');
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
