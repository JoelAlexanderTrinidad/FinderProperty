const express = require('express');
const routes = express.Router();

const { createUser } = require('../controllers/user.controller');

/* /user */
routes
    .post('/create', createUser)

module.exports = routes;