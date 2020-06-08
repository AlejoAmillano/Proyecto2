var express = require('express');
var router = express.Router();
let controllers = require("../controllers");

router.get('/', controllers.detalleController.detail);

module.exports = router;