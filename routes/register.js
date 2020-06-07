var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

//rutas de usuario

router.get('/register', controllers.registerController.getSignUp);
router.post('/register', controllers.registerController.postSignUp);
router.get('/login', controllers.registerController.getSignIn);
router.post('/login', controllers.registerController.confirmUser );

//rutas de reseñas

/*router.get('/reviews', controllers.registerController.getReviews)*/

module.exports = router;