var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarEstatistica(req, res);
});


module.exports = router;