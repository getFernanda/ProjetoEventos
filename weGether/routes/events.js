var express = require('express');
const EventController = require('../controllers/EventController');
var router = express.Router();

/* GET users listing. */
router.get('/create', EventController.showCreateEventForm);
router.post('/create', EventController.createEvent);

module.exports = router;
