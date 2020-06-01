var express = require('express');
var router = express.Router();
let detalleController = require("../controllers/detalleController");

router.get("/", detalleController.detail);

module.exports = router;