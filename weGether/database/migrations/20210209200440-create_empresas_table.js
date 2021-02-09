'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("empresa",{
        id:{
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: DataType.STRING,
        cnpj: DataType.STRING,
        representante: DataType.INTEGER,
        createdAt:{
          type: DataType.DATE
        },
        updatedAt: {
          type: DataType.DATE
        }
      });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('empresa');
  }
};
