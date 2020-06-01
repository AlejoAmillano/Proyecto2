var express = require('express');
var router = express.Router();
let avanzadoController = require("../controllers/avanzadoController");

router.get("/", avanzadoController.result);

module.exports = router;