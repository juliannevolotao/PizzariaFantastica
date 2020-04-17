const users = require('../database/Users.json');

module.exports = {
    show: (req, res) => {
        // se ja houver uma sessão aberta, enviá-lo para a página de listagem das pizzas
     
        res.render("login");
        
        
    },

    login: (req, res) => {

        // receber os dados do form
        let { email, password } = req.body;

        // buscar o usuario que tem o email dado
        let user = users.find( user => {
            return user.email == email;
        })

        // se o usuario foi encontrado, testo a senha dele
        if(user && user.password == password){

            // setando session do usuário
            req.session.user = JSON.stringify(user)
            
            //redirecionando o usuario
            return res.redirect("/pizzas");
        }

        // caso nao tenha sido, redirecionar
        return res.redirect("/login");
            

    }
}