let db = require("../db/models/index");

let bcrypt = require("bcryptjs");

let userController = {
    register: function(req, res) {
        res.render("register");
    },
    store: function(req, res) {
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        db.User.create(user)
        .then(() => {
            res.send("Usuario creado")
        })
    }
}

module.exports = userController;