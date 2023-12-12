const ItemModel = require('../models/itemModel.js')

const adminControllers = {
    adminView: async (req, res) => {
        const items = await ItemModel.getAll2();
        res.render('admin/admin', {
            view: {
                title: "Listado | Admin"
            },
            items: items
        });
    },
    createView: async (req, res) => {
        res.render('admin/create', {
            view: {
                title: "Create | Funkoshop"
            }
        })
    },
    createPostView: async (req, res) => {
        const creado = await ItemModel.crearItem(req.body.categoria, req.body.licencia, req.body.nombre_producto, req.body.descripcion_producto, req.body.sku, req.body.precio, req.body.stock, req.body.descuento, req.body.cuotas)
        res.redirect('/admin');
    },
    editItemView: async (req, res) => {
        //const id = req.params.id;
        //const { data: categories } = await ItemModel.getAllItemsCategories();
        //const { data: licences } = await ItemModel.getAllItemsLicences();
        //const item = await ItemModel.getById(id);
        res.render('admin/editItem', {
            view: {
                title: "Edit | Funkoshop"
            },
            //item: item,
            //categories,
            //licences
        });
    },    
    editPutView: (req, res) => res.send('Route for Admin Edit item for ID PUT'),
    deleteItemView: async (req, res) => {
        console.log('Llegó a la ruta de eliminación'); // Agrega esto para verificar en la consola del servidor
        const id = req.params.id;
        const eliminado = await ItemModel.eliminarItem(id);
        res.redirect('/admin');
    }
}

module.exports = adminControllers;