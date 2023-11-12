'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(80)
      },
      adress: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER(8)
      },
      beds: {
        type: Sequelize.INTEGER(2)
      },
      baths: {
        type: Sequelize.INTEGER(2)
      },
      parking: {
        type: Sequelize.BOOLEAN
      },
      furnished: {
        type: Sequelize.BOOLEAN
      },
      publicationTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'PublicationTypes'
          }
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Properties');
  }
};