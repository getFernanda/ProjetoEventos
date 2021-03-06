'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("events",{
      id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: DataType.STRING,
      tema: DataType.STRING,
      data_inicio: DataType.STRING,
      data_fim: DataType.STRING,
      hora_inicio: DataType.STRING,
      hora_fim: DataType.STRING,
      preco: DataType.STRING,
      inicio_vendas: DataType.STRING,
      link_imagem: DataType.STRING,
      createdAt:{
        type: DataType.DATE
      },
      updatedAt: {
        type: DataType.DATE
      }
    });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('events');
  }
};
