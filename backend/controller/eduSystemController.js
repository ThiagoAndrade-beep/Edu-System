const EduSystemModel = require("../models/eduSystemModel")

const eduSystemController = {
    create: async (req, res) => {
        try {
            const register = {
                name: req.body.name,
                email: req.body.email,
                rg: req.body.rg,
                age: req.body.age,
                date: req.body.date,
                serie: req.body.serie,
                room: req.body.room,
            }

            const response = await EduSystemModel.create(register)

            res.status(201).json({ response, Mensagem: "Aluno cadastrado com sucesso" })
        } catch (error) {
            console.log("deu erro", error)
        }
    },

    getAll: async (req, res) => {
        try {
            const response = await EduSystemModel.find()

            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id
            const response = await EduSystemModel.findById(id)

            if(!response) {
                return res.status(404).json({Mensagem: "Cadastro não encontrado!"})
            }

            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        try {    
            const id = req.params.id
        
            const register = {
                name: req.body.name,
                email: req.body.email,
                rg: req.body.rg,
                age: req.body.age,
                date: req.body.date,
                serie: req.body.serie,
                room: req.body.room,
            }
            
            const response = await EduSystemModel.findByIdAndUpdate(id, register)

            if(!response) {
                res.status(404).json({Mensagem: "Cadastro não encontrado"})
                return
            }


            res.status(200).json({register, Mensagem: "Cadastro atualizado!"})
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id

            const response = await EduSystemModel.findByIdAndDelete(id)

            if(!response) {
                return res.status(404).json({Mensagem: "Cadastro não encontrado!"})
            }

            res.status(200).json({Mensagem: "Cadastro deletado!"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = eduSystemController