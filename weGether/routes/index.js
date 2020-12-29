var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastro', function(req, res, next){
  res.render('cadastro')
});

router.get('/plenaria', function(req, res, next){
  res.render('plenaria')
});
module.exports = router;
