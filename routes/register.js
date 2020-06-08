var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

//rutas de usuario

router.get('/register', controllers.registerController.getSignUp);
router.post('/register', controllers.registerController.postSignUp);
router.get('/login', controllers.registerController.getSignIn);
router.post('/login', controllers.registerController.confirmUser );

//rutas de reseñas

router.post('/createReview', controllers.registerController.create)
router.get('/reviews', controllers.registerController.logReview)
router.post('/reviews', controllers.registerController.confirmLogReview)
router.get('/reviews/:id', controllers.registerController.getReviews)
router.get('/reviews/delete/:id', controllers.registerController.deleteReview)
router.post('/reviews/delete/:id', controllers.registerController.confirmDelete)
router.get('/reviews/edit/:id', controllers.registerController.showEdit)
router.post('/reviews/edit/:id', controllers.registerController.confirmEdit)

//rutas de buscar usuarios

router.get('/searchUser', controllers.registerController.searchForm)

module.exports = router;