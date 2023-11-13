var express = require('express');
var router = express.Router();
var controller = require('../../controllers/Admin/updateproduct')
const multer = require("multer");
const storageConfig = require("../../utils/multer");

const upload = multer({ storage: storageConfig.storage });

router.put('/',upload.single('productimg'), controller.UpdateProduct);

module.exports = router;