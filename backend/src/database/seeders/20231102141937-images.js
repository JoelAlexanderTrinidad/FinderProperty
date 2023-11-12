'use strict';

const imagesJSON = require('./data/images.json');

const images = imagesJSON.map(image => {
    return {
        ...image,
        createdAt: new Date(),
        updatedAt: new Date()
    }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Images', images, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
