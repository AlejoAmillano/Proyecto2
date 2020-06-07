let models = require("../db/models/index");
let bcrypt = require("bcryptjs");
let moduloLogin = require('../config/loginModule')

module.exports = {

    //REGISTRAR

	getSignUp: function(req, res, next){
		return res.render('register');
	},

	postSignUp: (req, res) => {
		const { name, email, password} = req.body;
		let errors = [];
	  
		if (!name || !email || !password ) {
		  errors.push({ msg: 'Porfavor ingrese todos los datos' });
		}
	  
		if (password.length < 6) {
		  errors.push({ msg: 'La contraseña debe tener al menos 6 caracteres' });
		}
	  
		if (errors.length > 0) {
		  res.render('register', {
			errors,
			name,
			email,
			password,
		  });
		} else {
		  models.User.findOne({ 
			where: {email: req.body.email}
		  }).then(user => {
			if (user) {
			  errors.push({ msg: 'El email ya existe' });
			  res.render('register', {
				errors,
				name,
				email,
				password,
			  });
			} else {
			  const newUser = new models.User({
				name,
				email,
				password
			  });
	  
			  bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
				  if (err) throw err;
				  newUser.password = hash;
				  newUser
					.save()
					.then(user => {
					  req.flash(
						'success_msg',
						'Ahora estás registrado y puedes iniciar sesión'
					  );
					  res.redirect('/login');
					})
					.catch(err => console.log(err));
				});
			  });
			}
		  });
		}
	  },

	//LOGIN

	getSignIn: function(req, res, next){
		return res.render('login');
	},

	buscar: function (req, res) {
		moduloLogin.chequearUsuario(req.query.email)
		.then (resultado =>{
			res.send(resultado)
		})
	},

	confirmUser: function(req, res) {
		moduloLogin.validar(req.body.email, req.body.password)
		.then(resultado=>{
			if (resultado == undefined) {
				res.redirect('/login');
			} else {
				res.redirect('/');
			}
		})
	},

	//RESEÑAS

	/*getReviews: function (req, res) {
		models.Review.findAll()
	}*/

};