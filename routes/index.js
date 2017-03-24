var express = require('express');
var router = express.Router();
var db = require('../db.js')

/* GET home page. */
router.get('/', (request, response, next) => {
  response.render('splash', { title: 'Gay Shame' });
})

router.get('/index', (request, response, next) => {
  response.render('index')
})

router.get('/about', (request, response, next) => {
  response.render('about')
})

router.get('/post', (request, response, next) => {
  response.render('create-post')
})

router.get('/community', (request, response, next) => {
  // db.getMessages()
  //   .then( function(messages){
  //     response.render('message-board', {messages:messages});
  //   })

  response.render('message-board')
});

router.post('/messages', function(request, response, next){
  res.redirect('/community')
})


module.exports = router;
