
const verificaSeTemItemCarrinho = (req, res, next) => {

    // verificando se a session.pizzas está setada
    if(req.session.pizzas){
        // vá adiante para a próxima middleware
        next();
    }
    else {
        // redireciona para a tela inicial
        res.redirect('/')
    }

}

module.exports = verificaSeTemItemCarrinho;