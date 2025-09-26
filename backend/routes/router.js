const router = require('express').Router()

const eduSystemRouter = require("./eduSystemRoute")
router.use("/", eduSystemRouter)

module.exports = router