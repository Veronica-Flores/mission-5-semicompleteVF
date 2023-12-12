const userModel = require('../models/userModel');
const crypt = require('bcryptjs');

const authControllers = {
    loginView: async (req, res) => {
        res.render('auth/login', {
            view: {
                title: "Login | Funkoshop"
            }
        })
    },
    loginPostView: async (req, res) => {
        const {email, password} = req.body
        const valido = await userModel.login(email, password);
        if(valido === undefined){
			res.redirect('/') //'/login/?error=1'
		} //else if(!(await crypt.compare(password, valido.password))){
			//res.redirect('/') } //'/login/?error=1'
		else {
            //req.session.userid = valido.idusers
			res.redirect(`/admin?user=${valido.user_id}`) ///admin?user=${valido.userid} me toma usuario undefined y entra por el else
		}
    },
    registerView: async (req, res) => {
        res.render('auth/register', {
            view: {
                title: "Register | Funkoshop"
            }
        })
    },
    registerPostView: async (req, res) =>  {
        const creado = await userModel.crearUsuario(req.body.login_nombre, req.body.login_apellido, req.body.login_email, req.body.login_pass)
        res.redirect('/')
    },    
    logoutView: (req, res) => res.send('Route for Logout')
}

module.exports = authControllers;