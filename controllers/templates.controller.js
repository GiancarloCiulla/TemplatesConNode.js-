// Todas las rutas son get, nuestro servidor sirve plantillas pug
const home = (req, res) => {
    try {
        res.status(200).render("home.pug"); 
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}
const about = (req, res) => {
try {
    res.status(200).render("about.pug"); 
}
catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({msj:`ERROR: ${error.stack}`});
}
}
const contact = (req, res) => {
try {
    res.status(200).render("contact.pug"); 
}
catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({msj:`ERROR: ${error.stack}`});
}
}

module.exports = {
home,
about,
contact
}