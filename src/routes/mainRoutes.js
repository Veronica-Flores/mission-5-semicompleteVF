const express = require ('express');
const router = express.Router();

const {
    homeView,
    contactView,
    aboutView,
    faqsView
} = require ('../controllers/mainController.js');

//const mainControllers = require ('../controllers/mainController.js');


router.get('/home', homeView); //Modificamos mainControllers.home por res.render para el ejs

router.get('/contact', contactView);
router.get('/about', aboutView);
router.get('/faqs', faqsView);


module.exports = router;