const express = require('express');
const router = express.Router();
const initiation = require('../controllers/initiation')

router.route('/')
    .get(initiation.initiate)

router.route('/start')
    .post(initiation.start_order)

module.exports = router