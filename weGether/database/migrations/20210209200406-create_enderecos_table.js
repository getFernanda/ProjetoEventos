'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("enderecos",{
        id:{
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        logradouro: DataType.STRING,
        cep: DataType.STRING,
        user_id: DataType.INTEGER,
        createdAt:{
          type: DataType.DATE
        },
        updatedAt: {
          type: DataType.DATE
        }
      });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('enderecos');
  }
};
