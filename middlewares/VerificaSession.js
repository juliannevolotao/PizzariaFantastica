


const verificaSeEstaLogado = (req, res, next) => {

    // verificando se a session.user está setada
    if(req.session.user){
        // vá adiante para a próxima middleware
        next();
    }
    else {
        // redireciona para a tela de login
        res.redirect('/login')
    }

}

module.exports = verificaSeEstaLogado;