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
        const id = req.params.id;
        const item = await ItemModel.traerItem(id);
        res.render('admin/editItem', {
            view: {
                title: "Edit | Funkoshop"
            },
            item: item,
        });
    },    
    editPutView: async (req, res) => {
        const actualizado = await ItemModel.actualizarItem(req.body.categoria, req.body.licencia, req.body.nombre_producto, req.body.descripcion_producto, req.body.sku, req.body.precio, req.body.stock, req.body.descuento, req.body.cuotas, req.params.id);
        res.redirect('/admin');
    },
    deleteItemView: async (req, res) => {
        console.log('Llegó a la ruta de eliminación'); // Agrega esto para verificar en la consola del servidor
        const id = req.params.id;
        const eliminado = await ItemModel.eliminarItem(id);
        res.redirect('/admin');
    }
}

module.exports = adminControllers;