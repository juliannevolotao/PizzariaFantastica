var express = require('express');
var router = express.Router();
const PizzasController = require("../controllers/PizzasControllers");

/* GET home page. */
router.get('/', PizzasController.index) 
router.get('/pizza/:id', PizzasController.pizza)

module.exports = router;
