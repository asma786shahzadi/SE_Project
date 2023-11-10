const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/Admin/employeestatus');

router.put('/', Controller.StatusEmployee);

module.exports = router;