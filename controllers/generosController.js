let db = require("../db/models/index");
let operadores = db.Sequelize.Op;

let generosController = {
    'listado': function(req, res, next){
        res.render('seriesporgenero');
    }
}

module.exports = generosController;