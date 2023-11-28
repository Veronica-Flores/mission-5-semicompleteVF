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
//ACÁ IRÍA const id = req.params.id;
//busco la info del item con el ID de la ruta res.send ()
router.post ('/item/:id/add', addItemView);
router.get ('/cart', cartView);
router.post ('/cart', checkoutView);

module.exports = router;