let db = require("../db/models/index");

let generosController = {
    listado: function(req,res){
        db.Genero.findAll()
        .then((generos) => {
            //ACA VA LA CONSECUENCIA
            res.render("listaGeneros", {
                generos:generos
            })
        })
    },

    detalle: function(req, res) {
        db.Genero.findByPk(req.params.id, {
            include: [
                { association: "series" }
            ]
        })
        .then((unGenero) => {
            //ACA VA LA CONSECUENCIA
            res.render("detalleGenero", {
                unGenero:unGenero
            })
        })
    }
}

module.exports = generosController;