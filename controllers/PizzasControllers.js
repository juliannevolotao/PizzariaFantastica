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

        preco = Number(preco);

        ingredientes = ingredientes.split(',');
        ingredientes = ingredientes.map(ing => ing.trim());

        let id = pizzas[pizzas.length - 1].id + 1;
        const pizza = {id, nome, ingredientes, preco, img:"/img/no-image.png", destaque: false};

        pizzas.push(pizza);

        fs.writeFileSync('database/Pizzas.json', JSON.stringify(pizzas));
        res.redirect('/')

    }
}