let db = require("../db/models/index");
let operadores = db.Sequelize.Op;

function validarSerie(serie) {
    let errores = [];

    if (serie.title == "") {
        errores.push("Por favor dejame el titulo completo, no vacío che")
    } else if (serie.title.length < 3) {
        errores.push("Che amigo, al menos 3 caracteres")
    }

    if (isNaN(serie.length)) {
        errores.push("Che amigo, la duracion tiene que ser un numero")
    }

    return errores;
}

let seriesController = {
    listado: function(req, res) {
        db.Serie.findAll({
            include: [
                { association: "genero" }
            ]
        })
        .then(function(series) {
            // ACA VA A IR LA CONSECUENCIA
            res.render("series", {
                series: series
            })
        })
        .catch((e) => {
            res.send(e)
        })
    },
    detalle: function(req, res) {
        db.Serie.findByPk(req.params.id, {
            include: [
                { association: "genero" },
                { association: "actuaciones" }
            ]
        })
        .then(function(unaSerie) {
            // ACA VA LA CONSECUENCIA
            res.render("detalleSerie", {
                unaSerie: unaSerie
            })
        })
    },
    best: function(req, res) {
        db.Serie.findAll(
            {
                where: [
                    { rating: { [operadores.gte]: 8} }
                ], 
                order: [
                    "rating", "title"
                ]
            }
        )
        .then(function(series) {
            // ACA VA A IR LA CONSECUENCIA
            res.render("series", {
                series: series
            })
        })
        .catch((e) => {
            res.send(e)
        })
    },
    create: function(req, res) {
        db.Genero.findAll()
        .then((generos) => {
            res.render("crearSerie", {
                generos: generos
            })
        })
        
    },
    store: function(req, res) {
        let serie = {
            title: req.body.titulo,
            rating: req.body.rating,
            release_date: req.body.fecha_de_estreno,
            genre_id: req.body.genero,
            awards: req.body.premios,
            length: req.body.duracion
        }

        let errores = validarSerie(serie)

        if (errores.length > 0) {
            // Hubieron errores => Volver a mostrar la pagina con el form y los errores
            db.Genero.findAll()
            .then((generos) => {
                res.render("crearSerie", {
                    generos: generos,
                    errores: errores
                })
            })
        } else {
            // No hubieron errores, todo bien :)
            db.Serie.create(serie)
            .then(() => {
                res.redirect("/series")
            })
        }
    },
    editar: function(req, res){
        db.Genero.findAll()
        .then((generos) => {

            db.Serie.findByPk(req.params.id)
            .then((serie) => {
                //Consecuencia final
                res.render("editarSerie", {
                    serie: serie,
                    generos: generos
                })
            })

        })
    },
    actualizar: function(req, res) {
        let serie = {
            title: req.body.titulo,
            rating: req.body.rating,
            genre_id: req.body.genero,
            awards: req.body.premios,
            length: req.body.duracion
        }

        db.Serie.update(serie, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect("/series")
        })
    },
    delete: function(req,res) {
        db.Serie.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect("/series")
        })
    }
    
}

module.exports = seriesController;