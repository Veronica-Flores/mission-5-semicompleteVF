const express = require ('express');
const router = express.Router();

const {
    loginView,
    loginPostView,
    registerView,
    registerPostView,
    logoutView
} = require ('../controllers/authController.js');

//const authControllers = require ('../controllers/authController.js')

router.get('/login', loginView);
router.post('/login', loginPostView);
router.get('/register', registerView);
router.post('/register', registerPostView);
router.get('/logout', logoutView);

module.exports = router;