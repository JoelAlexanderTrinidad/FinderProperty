const express = require('express');
const routes = express.Router();

const { getAll } = require('../controllers/images.controller');

routes.get('/:image', getAll);

module.exports = routes;