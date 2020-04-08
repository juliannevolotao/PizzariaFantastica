var express = require('express');
var router = express.Router();

const PizzasController = require("../controllers/PizzasControllers");

const upload = require('../lib/upload');

router.get('/', PizzasController.index);
router.get('/pizza/:id', PizzasController.pizza);
router.get('/pizzas/busca', PizzasController.busca);
router.get('/pizzas', PizzasController.list)

router.get('/pizzas/create', PizzasController.create);
router.post('/pizzas', upload.single("img"), PizzasController.store);

router.delete('/pizzas/:id', PizzasController.delete);

router.get('/pizzas/:id/edit', PizzasController.edit);

router.put('/pizzas/:id/update', upload.single("img"), PizzasController.update)


module.exports = router;