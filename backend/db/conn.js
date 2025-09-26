const mongoose = require('mongoose')
require('dotenv').config()


async function main() {
    try {
        mongoose.set("strictQuery", true) //O Mongoose só permite campos que estão definidos no Schema nas consultas

        await mongoose.connect(process.env.MONGO_URI)

        console.log("MongoDB conectado!")

    } catch (error) {
        console.log("Erro ao fazer conexão com o MongoDB", error)
    }
}

module.exports = main