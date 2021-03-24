'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let admin = JSON.parse(fs.readFileSync('./data/admin.json', 'utf-8'))
    admin.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    });
   return queryInterface.bulkInsert('Admins', admin, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Admins', null, {})
  }
};
