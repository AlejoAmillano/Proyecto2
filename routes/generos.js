var express = require('express');
var router = express.Router();
let generosController = require("../controllers/generosController");

router.get("/", generosController.listado);

router.get("/:id", generosController.detalle);

module.exports = router;
