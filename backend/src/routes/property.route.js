const express = require('express');
const routes = express.Router();
const {uploadImgProperty} = require('../middlewares/upLoadImages');

const { findByPk, createProperty, findAll, updateProperty, deleteProperty, searchProperty } = require('../controllers/property.controller');

/* /property */
routes
    .get('/details/:id', findByPk)
    .post('/create', uploadImgProperty.array('images'), createProperty)
    .post('/', findAll)
    .put('/update/:id', updateProperty)
    .delete('/delete/:id', deleteProperty)
    .get('/allProperty', searchProperty)

module.exports = routes;