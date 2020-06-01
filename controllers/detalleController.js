let db = require("../db/models/index");
let operadores = db.Sequelize.Op;

let detalleController = {

    'detail': function(req, res, next){
        res.render('detalle');
    }
    

};

module.exports = detalleController;