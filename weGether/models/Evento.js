module.exports = (sequelize, DataType) => {
    const Evento = sequelize.define('Evento', {
        id: {
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
        preco: DataType.STRING,
        inicio_vendas: DataType.DATE,
    },{
        tableName: 'evento',
        timeStamps: false
    })

    return Evento
}