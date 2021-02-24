const { Events } = require('../models')
const {check, validationResult, body} = require('express-validator');
const Sequelize = require('Sequelize')
const Op = Sequelize.Op

module.exports = {
    showCreateEventForm: (req, res) => {
        res.render('registrar-evento')
    },
    listEvent: async(req, res) => {
        let eventList = await Events.findAll()
        res.render('home-do-evento', {eventList})
    },
    createEvent: async (req, res) => {
        let errorList = validationResult(req)
        if(errorList.isEmpty()){
            let {nome, tema, data_inicio, data_fim, hora_inicio, hora_fim, preco, inicio_vendas} = req.body
            let {files} = req
            let link_imagem = files[0].originalname
       
        try {
           let newEvent = await Events.create({
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

        const evento = await Events.findByPk(id)

        return res.render('editar-eventos', {evento})
    },
    updateEvent: async(req, res)=> {
        const {nome, tema, data_inicio, data_fim, hora_inicio, hora_fim, preco, inicio_vendas, link_imagem} = req.body
        const {id} = req.params
        let errorList = validationResult(req)
        if(errorList.isEmpty()){
            try {
                const resultado = await Events.update({
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
        } else {
            const evento = await Events.findByPk(id)
            res.render('editar-eventos', {evento: evento,
            errors: errorList.errors})
        }
            
    },
    deleteEvent: async(req,res)=>{
        const {id} = req.params

        const resultado = await Events.destroy({
            where: {
                id
            }
        })
        res.redirect('/events/list')
    },
    showSearchBar: async(req, res)=> {
         res.render('pesquisar')
    },
    searchResult: async(req, res)=> {
        let {key} = req.query
        let errorList = validationResult(req)
        if(errorList.isEmpty()){
            try{
                let events = await Events.findAll({
                    where: {
                       nome: {
                           [Op.like]: `%${key}%`
                       }
                    }
                })
                res.render('resultado-pesquisar', {events})
            }catch(error){
                res.send(error)
            }
            
        }
        else{
            res.render('pesquisar', {errors: errorList.errors})
        }
       
    }

}