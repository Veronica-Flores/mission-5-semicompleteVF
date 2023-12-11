const express = require('express'); /*Requiero express para mi proyecto*/
const app = express(); /*levanto express y ya puedo utilizarlo*/

/*Import de las rutas*/
const mainRoutes = require ('./src/routes/mainRoutes.js'); //creo la varible para llamarla desde la carpeta
const shopRoutes = require ('./src/routes/shopRoutes.js');
const adminRoutes = require ('./src/routes/adminRoutes.js');
const authRouters = require ('./src/routes/authRoutes.js');

const port = process.env.PORT || 3100;

/*Define carpeta de archivos estáticos*/
app.use (express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

/*Rutas de aplicación*/
app.use('/', mainRoutes); /*enlazamos el archivo mainRoutes al entry point*/
app.use ('/shop', shopRoutes);
app.use ('/admin', adminRoutes);
app.use('/auth', authRouters);

/* Motor de plantillas EJS*/
app.set('view engine', 'ejs');
app.set('views', './src/views');


app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`)); // escucho a traves del puerto 3100 y devuelvo mensaje