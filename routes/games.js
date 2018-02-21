var express = require('express');
var router = express.Router();
var Game = require('../models').Game;

/* GET home page. */
router.get('/', function(req, res) {
  Game.all()
    .then( function(games) {
      return res.render('games', { games: games });
 });
});

/* POST add game listing */
router.post('/', function(req,res){
  var title = req.body.title;
  Game.create({title: title })
    .then( function() {
      res.redirect('/games');
  });
});

/*DELETE delete game listing*/
router.delete('/:id', function(req, res) {
  Game.findById(req.params.id)
    .then( function(game) {
      game.destroy()
    })
    .then( function(){
      return res.redirect('/games');
  });
});

module.exports = router;
