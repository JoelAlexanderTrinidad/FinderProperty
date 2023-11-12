'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Property.hasMany(models.Images, {
        as: 'images',
        foreignKey: 'propertyId',
        onDelete: 'cascade'
      })
    }
  }
  Property.init({
    name: DataTypes.STRING,
    adress: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    baths: DataTypes.INTEGER,
    parking: DataTypes.BOOLEAN,
    furnished: DataTypes.BOOLEAN,
    publicationTypeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};