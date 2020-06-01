var express = require('express');
var router = express.Router();
let resultadosavanzadoController = require("../controllers/resultadosavanzadoController");

router.get("/", resultadosavanzadoController.result);

module.exports = router;