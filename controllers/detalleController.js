let db = require("../db/models/index");
let operadores = db.Sequelize.Op;

let detalleController = {

    detail: function(req, res, next){
        db.Resena.findAll({
            where:{
                idserie: req.query.id
            }
        })
        .then(function(reviews) {
            res.render('detalle', {
                id: req.query.id,
                resenias: reviews
            })
        })
    }
    

};

module.exports = detalleController;