const express = require('express');
const router = express.Router();
const {clientdata} = require('../models');

router.get('/', async (req, res) => {
    const listOfclientData = await clientdata.findAll();
    res.json(listOfclientData);
});

router.post('/', async (req, res) => {
    const newClientData = req.body;
    await clientdata.create(newClientData);
});

module.exports = router;