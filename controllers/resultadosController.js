let db = require("../db/models/index");
let operadores = db.Sequelize.Op;

let resultadosController = {

    result: function(req, res, next){
        res.render('resultadosdelbuscador');
    }
    
};

module.exports = resultadosController;