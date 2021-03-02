'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('eventos', [{
      nome: 'II Encontro nacional de tecnologia',
      empresa_id: 200,
      data_inicio: '2021-02-18 00:00:00',
      data_fim: '2021-02-22 00:00:00',
      data_inicio_vendas:'2020-12-10 00:00:00'
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
