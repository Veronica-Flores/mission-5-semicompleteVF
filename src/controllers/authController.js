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
        //res.send('Route for Register GET'),
        res.render('auth/register', {
            view: {
                title: "Register | Funkoshop"
            }
        })
    },
    registerPostView: (req, res) => res.send('Route for Register POST'),
    logoutView: (req, res) => res.send('Route for Logout')
}

module.exports = authControllers;