'use strict';
const Sequelize = require('sequelize');
const {
  Model
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    details: DataTypes.STRING,
    value: DataTypes.STRING,
    createAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};