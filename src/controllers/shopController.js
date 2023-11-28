const shopControllers = {
    shopView: async (req, res) => {
        //const items = await ItemsService.getAllItems();
        //res.send ('Route for Shop View')
        res.render('../views/shop/shop.ejs', {
            view: {
                title: "Shop | Funkoshop"
            },
            //items
        })
    },
    itemView: async (req, res) => {
        //const id = req.params.id;
        //const item = await ItemsService.getItem(id);
        //res.send ('Route for encontrar y devolver el producto por un ID'),
        res.render('../views/shop/item.ejs', {
            view: {
                title: "Item | Funkoshop"
            },
            //item
        })    
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