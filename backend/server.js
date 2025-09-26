const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const conn = require('./db/conn')
conn()

const routes = require('./routes/router')

app.use("/api", routes)

const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
