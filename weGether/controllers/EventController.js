const { Evento } = require('../models')
const Sequelize = require('sequelize')
const config = require('../config/database')

module.exports = {
    showCreateEventForm: (req, res) => {
        res.render('registrar-evento')
    },
    createEvent: async (req, res) => {
       let {nome, tema, data_inicio, data_fim, hora_inicio, hora_fim, preco, inicio_vendas} = req.body
       try {
           let newEvent = await Evento.create({
               nome,
               tema,
               data_inicio,
               data_fim,
               hora_inicio,
               hora_fim,
               preco,
               inicio_vendas

           })
           res.send(newEvent)

       } catch(err) {
          res.send(err)
       }
    }
}