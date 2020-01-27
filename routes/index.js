var express = require('express');
var router = express.Router();

var Zombie = require("../models/zombie")

/* GET home page. */
router.get('/', function(req, res, next) {
    Zombie.find().exec(function(error, Zombies) {
        if (!error) {
            console.log(Zombies);
            res.render('index', { title: 'The jungle', coleccion: Zombies });
        }
    });
});

router.get('/prueba', function(req, res) {
    res.send('<h1>Esto es una prueba.</h1>');
});

module.exports = router;