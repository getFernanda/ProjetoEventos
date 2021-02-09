module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable("ingressos",{
        id:{
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        usuario_id: DataType.INTEGER,
        evento_id: DataType.INTEGER,
        checkout: DataType.INTEGER,
        createdAt:{
          type: DataType.DATE
        },
        updatedAt: {
          type: DataType.DATE
        }
      });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('ingressos');
  }
};
