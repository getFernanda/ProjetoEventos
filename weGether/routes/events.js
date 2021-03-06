var express = require('express');
const EventController = require('../controllers/EventController');
var router = express.Router();
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public/img'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })


/* GET users listing. */
router.get('/create', EventController.showCreateEventForm);
router.post('/create', upload.any(), [
    check('nome').isLength({min:3}).withMessage('O nome do evento deve ter mais de 3 caracteres.'),
    check('tema').isLength({min:3}).withMessage('O tema deve ter mais de 3 caracteres'),
    check('data_inicio'),
    check('data_fim'),
    check('hora_inicio').isInt({ allow_leading_zeroes: true }).withMessage('A hora de início deve ser um número.'),
    check('hora_fim').isInt({ allow_leading_zeroes: true }).withMessage('A hora do fim deve ser um número.'),
    check('preco').isInt({ allow_leading_zeroes: true }).withMessage('O preço deve ser um número.'),
    check('inicio_vendas'),
    // check('link_imagem').isLength({min:5}).withMessage('Deve conter uma url')

] ,EventController.createEvent);
router.get('/edit/:id', EventController.editEvent);
router.post('/edit/:id', EventController.updateEvent);
router.get('/list', EventController.listEvent);
router.post('/delete/:id', EventController.deleteEvent)


router.get('/meus-eventos', function(req, res, next) {
  res.render('meus_eventos');
});

router.get('/trilha', function(req, res, next){
  res.render('trilha')
});

module.exports = router;
