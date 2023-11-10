var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/addemployee');
const multer = require("multer");
const storageConfig = require("../../utils/multer");

const upload = multer({ storage: storageConfig.storage });

router.post('/',upload.single('employeeimg'), controller.AddEmployee);

module.exports = router;