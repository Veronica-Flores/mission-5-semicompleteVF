const mainControllers = {
    homeView: async (req, res) => {
        //const licences = await LicenceService.getAllItemsLicences();
        //const categories = await CategoryServicie.getAllItemsCategories();
        //res.send('Ruta de página de Home')
        res.render('home', {
            view: {
                title: "Home | Funkoshop"
            }
        })
    },
    contactView: async (req, res) => {
        //res.send('Ruta de página de Contacto'),
        res.render('contact', {
            view: {
                title: "Contacto | Funkoshop"
            }
        })
    },
    aboutView: (req, res) => res.send('Ruta de página sobre Nosotros'),
    faqsView: (req, res) => res.send('Route for Faqs View')
}

module.exports = mainControllers;