var express = require('express');
var router = express.Router();

const PedidosController = require('../controllers/PedidosController');

const verificaSeTemItemCarrinho = require('../middlewares/VerificaCarrinho');


router.post('/pedidos/add', PedidosController.add);
router.get('/carrinho', verificaSeTemItemCarrinho, PedidosController.show);


module.exports = router;