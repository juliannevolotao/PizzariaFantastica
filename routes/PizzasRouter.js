var express = require('express');
var router = express.Router();

const PizzasController = require("../controllers/PizzasController");

// middleware para verificar sessão
const verificaSeEstaLogado = require('../middlewares/VerificaSession') 

// middleware do express para upload de arquivos
const upload = require('../lib/upload');




// _______________ ROTAS DE VISUALIZAÇÃO _______________ //

router.get('/', PizzasController.index); // view
router.get('/pizza/:id', PizzasController.pizza); // view de pizza específica
router.get('/pizzas/busca', PizzasController.busca); // busca de pizza por nome




// _______________ ROTAS DE ADMINISTRADOR _______________ //

router.get('/pizzas', verificaSeEstaLogado, PizzasController.list);

// Criação de pizzas
router.get('/pizzas/create', verificaSeEstaLogado, PizzasController.create); // view
router.post('/pizzas', verificaSeEstaLogado, upload.single("img"), PizzasController.store); // action form

// Deletar pizza
router.delete('/pizzas/:id', verificaSeEstaLogado, PizzasController.delete);

// Edição de pizzas
router.get('/pizzas/:id/edit', verificaSeEstaLogado, PizzasController.edit); // view
router.put('/pizzas/:id/update', verificaSeEstaLogado, upload.single("img"), PizzasController.update) // action form



module.exports = router;