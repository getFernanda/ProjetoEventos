var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/area-usuario', function(req, res, next){
  res.render('area-usuario')
});

router.get('/plenaria', function(req, res, next){
  res.render('plenaria')
});

router.get('/seguranca', function(req, res, next){
  res.render('seguranca')
});

router.get('/home-do-evento', function(req, res, next){
  res.render('home_do_evento')
});

router.get('/dados-pessoais', function(req, res, next) {
  res.render('dados_pessoais');
});

router.get('/meus-eventos', function(req, res, next) {
  res.render('meus_eventos');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/trilha', function(req, res, next){
  res.render('trilha')
});

router.get('/cadastro', function(req, res, next){
  res.render('cadastro')
});
module.exports = router;
