const ItemModel = require('../models/itemModel.js')

const shopControllers = {
    shopView: async (req, res) => {
        const items = await ItemModel.getAll(9);
        res.render('../views/shop/shop.ejs', {
            view: {
                title: "Shop | Funkoshop"
            },
            items: items
        });
    },
    itemView: async (req, res) => {
        const id = req.params.id;
        const item = await ItemModel.getById(id);
        const items = await ItemModel.getAll(5);
        res.render('../views/shop/item.ejs', {
            view: {
                title: "Item | Funkoshop"
            },
            item: item,
            items: items
        });    
    },
    addItemView: (req, res) => res.send ('Route for añadir un item nuevo al carrito'),
    cartView: async (req, res) => {
        //res.send ('Route for Shop carrito View'),
        res.render('../views/shop/carrito.ejs', {
            view: {
                title: "Carrito | Funkoshop"
            },
        })    
    },    
    checkoutView: (req, res) => res.send ('Route for checkout page - pagina carrito')
}

module.exports = shopControllers;