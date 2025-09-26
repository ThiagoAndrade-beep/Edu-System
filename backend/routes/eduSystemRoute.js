const router = require('express').Router()
const eduSystemController = require("../controller/eduSystemController")

router.route("/register").post((req, res) => eduSystemController.create(req, res))

router.route("/register").get((req, res) => eduSystemController.getAll(req, res))

router.route("/register/:id").get((req, res) => eduSystemController.get(req, res))

router.route("/register/:id").put((req, res) => eduSystemController.update(req, res))

router.route("/register/:id").delete((req, res) => eduSystemController.delete(req, res))

module.exports = router