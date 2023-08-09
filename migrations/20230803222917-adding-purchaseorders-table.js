"use strict";

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("purchaseOrders", "localDesign", {
      allowNull: true,
      type: Sequelize.TEXT,
    });

    await queryInterface.changeColumn("purchaseOrders", "customDesign", {
      allowNull: true,
      type: Sequelize.TEXT,
    });

    await queryInterface.changeColumn("purchaseOrders", "comments", {
      allowNull: true,
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("purchaseOrders", "localDesign");
    await queryInterface.removeColumn("purchaseOrders", "customDesign");
    await queryInterface.removeColumn("purchaseOrders", "comments");
  },
};
