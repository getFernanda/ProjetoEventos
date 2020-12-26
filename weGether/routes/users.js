var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dados-pessoais', function(req, res, next) {
  res.render('dados_pessoais');
});

router.get('/meus-eventos', function(req, res, next) {
  res.render('meus_eventos');
});

module.exports = router;
