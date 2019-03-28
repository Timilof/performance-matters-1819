const express = require('express');
const router = express.Router();
const { index, detail, offline } = require('../controller/indexController');

router.get('/', index)
router.get('/offline', offline)
router.get('/detail', detail)
// router.post('/detail', detail)
// router.get('/detail/:id', detail);
// todo specify error route

module.exports = router;
