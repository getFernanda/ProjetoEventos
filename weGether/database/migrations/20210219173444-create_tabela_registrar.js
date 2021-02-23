'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("registrar",{
      id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: DataType.STRING,
      tema: DataType.STRING,
      data_inicio: DataType.DATE,
      data_fim: DataType.DATE,
      hora_inicio: DataType.STRING,
      hora_fim: DataType.STRING,
      preco: DataType.STRING,
      inicio_vendas: DataType.DATE,
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
    queryInterface.dropTable('registrar');
  }
};
