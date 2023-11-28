const adminControllers = {
    adminView: async (req, res) => {
        //res.send('Route for Admin View'),
        res.render('admin/admin', {
            view: {
                title: "Listado | Admin"
            }
        })
    },
    createView: async (req, res) => {
        //res.send('Route for Admin Create View'),
        res.render('admin/create', {
            view: {
                title: "Create | Funkoshop"
            }
        })
    },
    createPostView: (req, res) => res.send('Route for Admin Create POST View'),
    editItemView: (req, res) => {
        //res.send('Route for Admin Edit for ID'),
        res.render('admin/editItem', {
            view: {
                title: "Edit | Funkoshop"
            }
        })
    },    
    editPutView: (req, res) => res.send('Route for Admin Edit item for ID PUT'),
    deleteView: (req, res) => res.send('Route for Admin Delete item for ID View')
}

module.exports = adminControllers;