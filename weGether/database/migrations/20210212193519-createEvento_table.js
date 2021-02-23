'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("evento",{
      id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: DataType.STRING,
      tema: DataType.STRING,
      data_inicio: DataType.DATE,
      data_fim: DataType.DATE,
      hora_inicio: DataType.INTEGER,
      hora_fim: DataType.INTEGER,
      preco: DataType.INTEGER,
      inicio_vendas: DataType.DATE,
      createdAt:{
        type: DataType.DATE
      },
      updatedAt: {
        type: DataType.DATE
      }
    });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('evento');
  }
};
