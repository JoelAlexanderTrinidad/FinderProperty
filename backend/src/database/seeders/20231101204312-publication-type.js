'use strict';

const typeJSON = require('./data/type.json');

const type = typeJSON.map(type => {
  return{
    ...type,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('PublicationTypes', type, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PublicationTypes', null, {});
  }
};
