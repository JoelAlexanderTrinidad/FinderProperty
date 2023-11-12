'use strict';

const propertyJSON = require('./data/property.json');

const property = propertyJSON.map(property => {
  return {
    ...property,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Properties', property, {});
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Properties', null, {});
    
  }
};
