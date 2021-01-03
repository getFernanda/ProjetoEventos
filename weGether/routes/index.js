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

router.get('/trilha', function(req, res, next){
  res.render('trilha')
});

router.get('/cadastro', function(req, res, next){
  res.render('cadastro')
});
module.exports = router;
