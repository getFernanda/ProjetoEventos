'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("eventos",{
        id:{
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: DataType.STRING,
        empresa_id: DataType.INTEGER,
        data_inicio: DataType.DATE,
        data_fim: DataType.DATE,
        data_inicio_vendas: DataType.DATE,
        createdAt:{
          type: DataType.DATE
        },
        updatedAt: {
          type: DataType.DATE
        }
      });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('eventos');
  }
};

