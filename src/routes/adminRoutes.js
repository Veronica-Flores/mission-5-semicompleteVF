const express = require ('express');
const router = express.Router();

const {
    adminView,
    createView,
    createPostView,
    editItemView,
    editPutView,
    deleteView
} = require ('../controllers/adminController.js');

//const adminControllers = require ('../controllers/adminController.js');

router.get('/', adminView);
router.get('/create', createView);
router.post('/create', createPostView);
router.get('/edit/:id', editItemView);
router.put('/edit/:id', editPutView);
router.delete('/delete/:id', deleteView);


module.exports = router;