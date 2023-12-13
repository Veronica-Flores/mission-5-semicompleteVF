const express = require('express');
const router = express.Router();
const {conn} = require ('./../config/conn.js');
const {body} = require ('express-validator');
const validacion = require('./../middlewares/validation');

const {
	loginView,
	loginPostView,
	registerView,
	registerPostView,
	logoutView
} = require('../controllers/authController.js');

/* VALIDACION PARA LOGIN */
const validacionLogin = [
	body('email')
		.notEmpty()
		.withMessage('El campo de email no puede estar vacío.')
		.isLength({min: 3})
		.withMessage('El email debe tener longitud mínima de 3 caracteres.'),
	body('pass').isLength({min: 3}).withMessage('La contraseña debe tener la longitud correcta.')
	];

/* VALIDACION PARA REGISTRO */
const validacionRegistro = [
	body("login_email")
		.isLength({ min: 3 })
		.withMessage("Ingrese un email válido")
		.bail()
		.custom((value, { req }) => {
			return new Promise(async (resolve, reject) => {
				try {
					const [usuarioExiste] = await conn.query(`SELECT * FROM user WHERE email = '${value}'`);
					console.log(usuarioExiste.length);	
					if (usuarioExiste.length > 0) {
						return reject()
					} else {
						return resolve()
					}
				} catch (error) {
					console.log(error)
				}
			})
		})
		.withMessage("Email duplicado")
	];

router.get('/login', loginView);
router.post('/login', validacionLogin, validacion, loginPostView);
router.get('/register', registerView);
router.post('/register', validacionRegistro, validacion, registerPostView);
router.get('/logout', logoutView);

module.exports = router;