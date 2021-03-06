const bcrypt = require("bcryptjs");
const { User } = require("./../models");
const { validationResult } = require('express-validator');
const passport = require("passport");

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

    req.body.password = bcrypt.hashSync(req.body.senha, 10);
    let user = { ...req.body }
    await User.create(user);

    res.render('login', { added: true, erros: null });
  },

  login(req, res, next) {
    if (req.query.fail)
        res.render('login', { message: 'Usuário e/ou senha incorretos!', erros: null });
    else
        res.render('login', { message: null, erros: null });
  },

  async authenticate(req, res, next) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      console.log(result.array());
      res.render('login', { erros: result.array(), message: null });
    }
    
    return passport.authenticate('local', { 
      successRedirect: '/',
      failureRedirect: '/auth/login?error=true' 
    })(req, res, next);
  },

  logout(req, res, next) {
    req.session.destroy();
    req.logout();
    res.redirect('/');
  }
}
