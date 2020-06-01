let db = require("../db/models/index");
let operadores = db.Sequelize.Op;

let resultadosavanzadoController = {

    'result': function(req, res, next){
        res.render('resultadosdelbuscadoravanzado');
    }
    
};

module.exports = resultadosavanzadoController;