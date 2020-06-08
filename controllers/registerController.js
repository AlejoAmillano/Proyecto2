let models = require("../db/models/index");
let bcrypt = require("bcryptjs");
let moduloLogin = require('../config/loginModule')
let op = models.Sequelize.Op;


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

	create: function(req, res) {
		moduloLogin.validar(req.body.email, req.body.password)
		.then(function(usuario) {
			if (usuario != undefined) {
				models.Resena.create({
					idserie: req.body.idserie,
					idusuario: usuario.id,
					username: usuario.name,
					text: req.body.text,
					puntaje: req.body.puntaje
				})
				.then(function() {
					res.redirect('/series/detalle?id=' + req.body.idserie)
				})
			} else {
				res.send("Hubo un error al crear esta reseña")
			}
		})
	},
	
	logReview: function (req, res) {
		res.render('loginReview', { tipo: "loginReseña"})
	},

	confirmLogReview: function(req, res) {
		moduloLogin.validar(req.body.email, req.body.password)
		.then(resultado=>{
			if (resultado == undefined) {
				res.redirect('/reviews');
			} else {
				res.redirect('/reviews/'+resultado.id);
			}
		})
	},

	getReviews: function (req, res) {
		models.Resena.findAll({
			where: [
				{idusuario: req.params.id}
			],
			include: ["usuario"]
		})
		.then(resultado=>{
			res.render('buscadoravanzado', {resultado: resultado})
		})
	},

	deleteReview: function (res,req) {
		res.render('loginReview', { tipo: "delete", deleteId: req.params.id})
	},

	confirmDelete: function (req, res) {
		moduloLogin.validar(req.body.email, req.body.password)
	.then(resultado=>{
		if (resultado != null) {
			models.Resena.destroy({
				where:{
					id: req.params.id
				}
			})
			res.redirect('/reviews')
		} else {
			res.redirect('/reviews/delete/'+req.params.id)
		}
	})	
  },

  showEdit: function (req, res) {
	  models.Resena.findOne({
		  where: [
			  {id:req.params.id}
		  ]
	  })
	  .then(resultado=>{
		  res.render('editarReview', {resultado: resultado})
	  })
  },

  confirmEdit: function (req, res) {
	  let updateR = {
		  text: req.body.text,
		  puntaje: req.body.puntaje,
		  id: req.params.id
	  }
	  models.Resena.update({
		  text: updateR.text,
          puntaje: updateR.puntaje
	  },{
		  where:{
			  id: updateR.id
		  }
	  })
	  .then(()=>{
		models.Resena.findByPk(req.params.id)
		.then(resultado=>{
			res.redirect('/reviews/'+ resultado.idusuario)
		})
	})
 },

 //BUSCAR USUARIOS

 searchForm: function(req, res) {
	res.render('searchUser');
 },
 searchUserResult: function(req, res){
	models.User.findAll({
		where: {
			[op.or]: {
				email: {[op.like]: "%" + req.query.searchUser + "%"},
				name: {[op.like]: "%" + req.query.searchUser + "%"}
			}
		}
	})
	.then(function(resultado){
		res.render('searchUserResult',{
			users: resultado
		})
	})
 },
 searchById: function(req, res) {
	models.User.findByPk(req.params.id)
	.then(function(usuario) {
		models.Resena.findAll({
			where: {
				idusuario: usuario.id
			}
		})
		.then(function(reviews){
			res.render('userDetail', {
				user: usuario,
				resenias: reviews
			})
		})  
	})
  }

 }