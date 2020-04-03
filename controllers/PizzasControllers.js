const pizzas = require('../database/Pizzas.json')

module.exports = {

    index: (req, res) => {
        return res.render("index", {pizzas});
    },

    pizza: async (req, res) =>{
        let pizza = pizzas.find((pizza) => {
            return pizza.id == req.params.id
        })

        return res.render("pizza", {pizza})
    }
}