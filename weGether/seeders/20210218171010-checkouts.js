'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('checkouts', [{
      valor: 500.00,
      status: 'confirmado',
      data_compra: '2021-01-10 00:00:00',
      forma_pagamento: 'caratão de credito'
       }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
