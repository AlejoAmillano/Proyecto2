let db = require('../db/models/index')
let bcrypt = require('bcryptjs')

let moduloLogin = {
    
    chequearUsuario: function(email) {
        return db.User.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario !=null;
        })
    },

    buscarPorEmail: function(email) {
        return db.User.findOne({
            where:{
                email: email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function(email, pass) {
        return db.User.findOne({
            where:{
                email: email
            },
        })
        .then(results=> {
            if (results != null) {
                let chequear = bcrypt.compareSync(pass, results.password)
                if (chequear) {
                    return results;
                } else {
                    return undefined
                }
            } else {
                return undefined
            }
        })
    }
}

module.exports = moduloLogin;