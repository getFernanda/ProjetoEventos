'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("users",{
        id:{
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: DataType.STRING,
        email: DataType.STRING,
        password: DataType.STRING,
        phone: DataType.STRING,
        cargo: DataType.STRING,
        cliente_id: DataType.INTEGER,
        createdAt:{
          type: DataType.DATE
        },
        updatedAt: {
          type: DataType.DATE
        }
      });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('users');
  }
};
