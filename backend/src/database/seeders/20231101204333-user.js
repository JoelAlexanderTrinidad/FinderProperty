'use strict';
const bcryptjs = require('bcryptjs');
const userJSON = require('./data/users.json');

const user = userJSON.map(user => {
  return {
    ...user,
    password: bcryptjs.hashSync(user.password, 10),
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', user, {});
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Users', null, {});
    
  }
};
