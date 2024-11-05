const templatesController = require('../controllers/templates.controller');
const router = require('express').Router();

// GET http://localhost:3000/products
// GET http://localhost:3000/products/6
router.get("/", templatesController.home);
router.get("/about", templatesController.about);
router.get("/contact", templatesController.contact);


module.exports = router;