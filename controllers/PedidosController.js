const pizzas = require('../database/Pizzas.json');

module.exports = {
    add: (req, res) => {


        const {idPizza} = req.body;


        if( req.session.pizzas ) {
            req.session.pizzas.push(idPizza)
        }
        else {
            req.session.pizzas = [ idPizza ]
        }
        
        res.redirect('/');

    },

    show: async (req, res) => {
        let pizzasID = req.session.pizzas;

        
        // começa mapeando o array de ID's de pizzas da SESSION
        const pizzasCarrinho = await pizzasID.map( idsPizza => {
            // com o valor do ID, iremos procurar entre as pizzas, a determinada pizza com o ID

            return pizzas.find( pizza => {
                // retorna se o idsPizza(do session) é igual ao id dessa pizza(do banco de dados) 
                return pizza.id == idsPizza;
            })

        }) 

        console.log(pizzasCarrinho)

        return res.render("index", {pizzas: pizzasCarrinho});
    }
}

