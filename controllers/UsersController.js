const fs = require('fs');
const users = require('../database/Users.json');

module.exports = {

    list: (req, res) => {
        return res.render("crud-users/list", { users });
        // retorna uma view que recebe a lista de usuários
    },


    // Criação de usuário (1. view | 2.criação pelo form ) _______________________________
    create: (req, res) => {
        return res.render("crud-users/create");
        // retorna uma view com um form para criar o usuário
    },

    store: (req, res) => {
        // recebe os dados pelo formulario body

        // Cria o usuário e redireciona para '/users'
    },
    // ______________________________________________




    // Edição de usuário (1. view | 2.ediçao pelo form ) _______________________________
    edit: (req, res) => {
        return res.render("crud-users/edit")
        // retorna uma view com um form para editar o usuário do id passado na rota
    },

    update: (req, res)=> {
        // Altera as informações do usuario do id dado e redireciona para a rota '/users'
    },
    // ______________________________________________


    

    delete: (req, res) => {
        // remove o usuario de id passado pela rota
    }
}