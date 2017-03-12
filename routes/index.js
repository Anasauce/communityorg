var express = require('express');
var router = express.Router();
var db = require('../db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/post', function(req, res, next){
  res.render('create-post')
})

router.get('/community', function(req, res, next) {
  // db.getMessages()
  //   .then( function(messages){
  //     res.render('message-board', {messages:messages});
  //   })

  res.render('message-board')
});

router.post('/messages', function(req, res, next){
  res.redirect('/community')
})


module.exports = router;
