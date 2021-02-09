'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("checkouts",{
        id:{
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        valor: DataType.FLOAT,
        status: DataType.STRING,
        data_compra: DataType.DATE,
        forma_pagamento: DataType.STRING,
        createdAt:{
          type: DataType.DATE
        },
        updatedAt: {
          type: DataType.DATE
        }
      });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('checkouts');
  }
};
