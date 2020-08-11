'use strict';

const { DataTypes } = require("sequelize/types");
const Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    migration.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUIDV4,
        default: Sequelize.UUIDV4
      },
      name: {
        type: DataTypes.STRING
      },
      details: {
        type: DataTypes.TEXT
      },
      value: {
        type: DataTypes.STRING
      },
      company: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    migration.dropTable("Products").done(done);
  }
};