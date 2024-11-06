const express = require('express') //importamos paquete express
const app = express() // inicializar servidor con express
const port = 3000;


const morgan = require("./middlewares/morgan")
// Logger
app.use(morgan(':method :url :status - :response-time ms :body'));

app.use(express.json()); // Middleware para parsear el body de las peticiones
//habilitar static
app.use(express.static('public'));//middleware para servir archivos estáticos de front: CSS, JS, Assets

//PUG views
app.set('view engine', 'pug');
app.set('views','./views');

const templatesRoutes = require("./routes/templates.routes")

app.use('/', templatesRoutes);
app.use('/contact', templatesRoutes);
app.use('/about', templatesRoutes);


app.listen(port, () => {
    console.log(`Demo_Express listening on http://localhost:${port}`)
});
// Link de despliegue https://weather-app-qpwr.onrender.com/