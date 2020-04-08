const fs = require('fs');
const pizzas = require('../database/Pizzas.json');

module.exports = {

    index: (req, res) => {
        return res.render("index", {pizzas});
    },


    pizza: (req, res) => {
        let pizza = pizzas.find((pizza) => {
            return pizza.id == req.params.id
        })

        return res.render("pizza", {pizza})
    },


    busca: (req, res) => {

        let { busca } = req.query;

        if(busca) {
            const pizzaBusca = pizzas.filter((pizza) => {
                if(pizza.nome.toLowerCase().search(busca.toLowerCase()) != -1){
                    return true;
                }
            })
    
            return res.render("index", {pizzas: pizzaBusca})
        }
        else {
            res.redirect('/');
        }

    },


    create: (req, res) => {
        return res.render("crud-pizzas/create")
    },


    store: (req, res) => {

        let {nome, ingredientes, preco} = req.body;
      
        let img = `/img/${req.file.filename}`;

        preco = Number(preco);

        ingredientes = ingredientes.split(',');
        ingredientes = ingredientes.map(ing => ing.trim());

        let id = pizzas[pizzas.length - 1].id + 1;
        const pizza = {id, nome, ingredientes, preco, img, destaque: false};

        pizzas.push(pizza);

        fs.writeFileSync('database/Pizzas.json', JSON.stringify(pizzas));
        res.redirect('/pizzas')

    },


    list: (req, res) => {

        return res.render("crud-pizzas/list", {pizzas})
    },


    delete: (req, res) => {

        let indexPizza = pizzas.findIndex((pizza, index) => {
            return pizza.id == req.params.id
        });
        

        pizzas.splice(indexPizza, 1);

        fs.writeFileSync('database/Pizzas.json', JSON.stringify(pizzas));

        res.redirect('/pizzas');
    },


    edit: (req, res) => {
        let pizza = pizzas.find((pizza) => {
            return pizza.id == req.params.id
        })
        
        return res.render("crud-pizzas/edit", { pizza })
    },

    update: (req, res) => {

        let {nome, ingredientes, preco} = req.body;

        let img = `/img/${req.file.filename}`;

        let index = pizzas.findIndex((pizza) => {
            return pizza.id == req.params.id
        });
        
        pizzas[index].nome = nome;
        pizzas[index].ingredientes = ingredientes;
        pizzas[index].preco = preco;
        pizzas[index].img = img;
        

        fs.writeFileSync('database/Pizzas.json', JSON.stringify(pizzas));

        res.redirect('/pizzas');

    }
    
}