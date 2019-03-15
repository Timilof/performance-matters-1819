const express = require('express');
const router = express.Router();
const { index, about, handleRequest, notFound } = require('../controller/indexController');

router.get('/', index);
router.post('/detail', handleRequest)
// router.get('/detail/:id', detail);
// todo specify error route

module.exports = router;
