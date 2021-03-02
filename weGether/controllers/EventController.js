const { Registrar } = require('../models')
const {check, validationResult, body} = require('express-validator');

module.exports = {
    showCreateEventForm: (req, res) => {
        res.render('registrar-evento')
    },
    listEvent: async(req, res) => {
        let eventList = await Registrar.findAll()
        res.render('home-do-evento', {eventList})
    },
    createEvent: async (req, res) => {
        let errorList = validationResult(req)
        if(errorList.isEmpty()){
            let {nome, tema, data_inicio, data_fim, hora_inicio, hora_fim, preco, inicio_vendas} = req.body
            let {files} = req
            let link_imagem = files[0].originalname
       
        try {
           let newEvent = await Registrar.create({
               nome,
               tema,
               data_inicio,
               data_fim,
               hora_inicio,
               hora_fim,
               preco,
               inicio_vendas,
               link_imagem 

           })
           res.redirect('/events/list')

       } catch(err) {
          res.send(err)
       }
    } else {
        res.render('registrar-evento', {errors:errorList.errors})
    }
      
    },
    editEvent: async(req, res)=> {
        const {id} = req.params

        const evento = await Registrar.findByPk(id)

        return res.render('editar-eventos', {evento})
    },
    updateEvent: async(req, res)=> {
        const {nome, tema, data_inicio, data_fim, hora_inicio, hora_fim, preco, inicio_vendas, link_imagem} = req.body
        const {id} = req.params
        try {
            const resultado = await Registrar.update({
               nome,
               tema,
               data_inicio,
               data_fim,
               hora_inicio,
               hora_fim,
               preco,
               inicio_vendas,
               link_imagem
            }, {
                where: {
                   id
                }
            })
            console.log(resultado)
            res.redirect('/events/list')

        }catch(error) {
           console.log(error)
        }
    },
    deleteEvent: async(req,res)=>{
        const {id} = req.params

        const resultado = await Registrar.destroy({
            where: {
                id
            }
        })
        res.redirect('/events/list')
    }

}