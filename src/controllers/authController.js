const userModel = require('../models/userModel');
const crypt = require('bcryptjs');

const authControllers = {
    loginView: async (req, res) => {
        //res.send('Route for Login GET'),
        res.render('auth/login', {
            view: {
                title: "Login | Funkoshop"
            }
        })
    },
    loginPostView: (req, res) => res.send('Route for Login POST'),
    registerView: async (req, res) => {
        res.render('auth/register', {
            view: {
                title: "Register | Funkoshop"
            }
        })
    },
    registerPostView: async (req, res) =>  {
        const creado = await userModel.crearUsuario(req.body.nombre, req.body.apellido, req.body.email, req.body.hash)
        res.redirect('/')
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const usuario = await userModel.getUserByEmail(email);

    },
    
    logoutView: (req, res) => res.send('Route for Logout')
}

module.exports = authControllers;