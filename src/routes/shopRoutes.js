const express = require ('express');
const router = express.Router();

const {
    shopView,
    itemView,
    addItemView,
    cartView,
    checkoutView
} = require ('../controllers/shopController.js');

//const shopControllers = require ('../controllers/shopController.js');

router.get ('/', shopView);
router.get ('/item/:id', itemView); 
router.post ('/item/:id/add', addItemView);
router.get ('/cart', cartView);
router.post ('/cart', checkoutView);

module.exports = router;