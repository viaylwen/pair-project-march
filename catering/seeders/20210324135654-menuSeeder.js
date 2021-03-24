'use strict';
const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let menu = JSON.parse(fs.readFileSync('./data/menu.json', 'utf-8'))
    menu.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
  return queryInterface.bulkInsert('Menus', menu, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Menus', null, {})
  }
};
