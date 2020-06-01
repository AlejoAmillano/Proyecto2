let db = require("../db/models/index");
let operadores = db.Sequelize.Op;

let avanzadoController = {

    'result': function(req, res, next){
        res.render('buscadoravanzado');
    }
    
};

module.exports = avanzadoController;