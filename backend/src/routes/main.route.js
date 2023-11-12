const express = require('express');
const routes = express.Router();

const {findAll} = require('../controllers/main.controller');

routes
    .get('/', findAll)

module.exports = routes;