var express = require('express');
var router = express.Router();
const PizzasController = require("../controllers/PizzasControllers");
const PedidosController = require('../controllers/PedidosController');

/* GET home page. */
router.get('/', PizzasController.index) 
router.get('/pizza/:id', PizzasController.pizza)
router.get('/pizzas/busca', PizzasController.busca)
router.get('/pizzas/create', PizzasController.create)
router.post('/pizzas', PizzasController.store)



router.post('/pedidos/add', PedidosController.add)


module.exports = router;
