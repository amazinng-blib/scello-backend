'use strict';

const {
  AutoIncrement,
  PrimaryKey,
  AllowNull,
} = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        AutoIncrement: true,
        PrimaryKey: true,
      },
      creator: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      name: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        AllowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        AllowNull: false,
      },
      stockQuantity: {
        type: Sequelize.INTEGER,
        AllowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
