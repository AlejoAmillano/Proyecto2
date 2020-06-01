var express = require('express');
var router = express.Router();
let resultadosController = require("../controllers/resultadosController");

router.get("/", resultadosController.result);

module.exports = router;