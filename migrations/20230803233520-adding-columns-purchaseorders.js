"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("purchaseOrders", "demoDesign", {
      type: Sequelize.TEXT,
      allowNull: true,
      field: "demoDesign",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("purchaseOrders", "demoDesign");
  },
};
