const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController');

const upload = require('../lib/upload');


router.get('/users', UsersController.list); // retorna view que recebe a lista de usuarios

// Criação de usuário
router.get('/users/create', UsersController.create); // retorna uma view com um form para criar usuário
router.post('/users', upload.single("img"), UsersController.store); // cria um usuário e redireciona para '/users'

// Edição de usuário
router.get('/user/:id/edit', UsersController.edit); // retorna uma view com um form para editar o usuário do id passado pela rota
router.put('/users/:id', upload.single("img"), UsersController.update); // Altera o usuário do id e redireciona para a rota '/users'

router.delete('/users/:id', UsersController.delete); // Remove o usuário de id passado pela rota


module.exports = router;