const express = require('express');
const promptController = require('../controllers/prompt-controller');

const routes = express.Router();

routes.post('/api/prompt', promptController.sendImag);

module.exports = routes;