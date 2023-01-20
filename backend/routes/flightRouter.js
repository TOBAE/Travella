const express = require("express");

const router = express.Router();
const controller = require('../controllers/flightController');

router
    .get('/', controller.getFlights)
    .get('/:id', controller.getFlight)
    .post('/', controller.addFlight)
    .put('/:id', controller.updateFlight)
    .delete('/:id', controller.deleteFlight);

module.exports = router;