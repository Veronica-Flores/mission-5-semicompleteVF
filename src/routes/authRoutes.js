const express = require ('express');
const router = express.Router();
//const {conn} = require ('./../config/conn.js')
//const {body} = require ('express-validator');
//const validacion = require ('./../middlewares/validation.js) ESTO ES PARA EL LOGIN VALIDACION

const {
    loginView,
    loginPostView,
    registerView,
    registerPostView,
    logoutView
} = require ('../controllers/authController.js');


/* VALIDACION PARA REGISTRO Y LOGIN
const validacionRegistro = [
	body("nombre")
	.isLength({min: 3})
	.withMessage("Ingrese un nombre válido")
	.bail()
	.custom((value, {req}) => {
			return new Promise(async (resolve, reject) => {
				try {
					const [usuarioExiste] = await conn.query(`SELECT * FROM users WHERE nombre = '${value}'`)
					if(!usuarioExiste){
						return reject()
					} else {
						return resolve()
					}
				} catch (error) {
					console.log(error)
				}
			})
		})
	.withMessage("Nombre duplicado"),
	body('apellido')
	.isLength({min: 3})
	.withMessage('Ingrese un apellido válido')
	.custom((value, {req}) => value === req.body.apellido2)
	.withMessage('No coindice el apellido')
	]

const validacionLogin = [
	body('nombre')
		.notEmpty()
		.withMessage('El campo de nombre no puede estar vacío')
		.isLength({min: 3})
		.withMessage('El nombre debe tener longitud mínima de 3 caracteres'),
	body('apellido').isLength({min: 3}).withMessage('El apellido debe tener longitud correcta')
	]
*/

router.get('/login', loginView);
router.post('/login', loginPostView);
router.get('/register', registerView);
router.post('/register', registerPostView);
router.get('/logout', logoutView);

module.exports = router;