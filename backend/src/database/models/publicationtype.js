'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicationType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PublicationType.hasMany(models.Property, {
        as: 'property',
        foreignKey: 'publicationTypeId'
      })
    }
  }
  PublicationType.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'PublicationType',
  });
  return PublicationType;
};