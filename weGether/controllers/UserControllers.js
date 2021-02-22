const bcrypt = require("bcryptjs");
const { User } = require("./../app/models");
const { validationResult } = require('express-validator');

module.exports = {
  create(req, res, next) {
    res.render('cadastro',  { erros: null });
  },

  async save(req, res, next) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      console.log(result.array());
      res.render('cadastro', { erros: result.array() });
    }
    
    req.body.senha = bcrypt.hashSync(req.body.senha, 10);
    let user = { ...req.body }
    await User.create(user);

    res.render('login', { added: true, erros: null });
  },

  login(req, res, next) {
    if (req.query.fail)
        res.render('login', { message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('login', { message: null });
  },

  authenticate(req, res, next) {
    passport.authenticate('local', { 
      successRedirect: '/', 
      failureRedirect: '/login?fail=true' 
    })
  },

  logout(req, res, next) {
    req.session.destroy();
    req.logout();
    res.redirect('/');
  }
}
