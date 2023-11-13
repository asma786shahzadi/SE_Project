const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/Admin/productstatus');

router.put('/', Controller.StatusProduct);

module.exports = router;