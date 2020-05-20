var express = require('express');
var router = express.Router();
let seriesController = require("../controllers/seriesController")

router.get("/", seriesController.listado);

router.get("/best", seriesController.best);

router.get("/create", seriesController.create);

router.post("/create", seriesController.store);

router.get("/:id", seriesController.detalle);

router.get("/editar/:id", seriesController.editar);

router.post("/editar/:id", seriesController.actualizar);

router.post("/delete/:id", seriesController.delete);

module.exports = router;
