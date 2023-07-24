"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("products", "photoURL", {
      type: Sequelize.STRING,
      allowNull: true,
      field: "photoURL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("products", "photoURL");
  },
};
