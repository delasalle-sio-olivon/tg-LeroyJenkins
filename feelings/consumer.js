var config = require('../config/config');
var bus = require('servicebus').bus({ url: config.amqp.ip });
var reader = require('./reader');

bus.listen(config.amqp.canalIn, function (tweet) {
  var sentiment = reader(tweet.text);
  tweet.sentiment = sentiment;
  console.log(tweet);
  bus.send(config.amqp.canalOut, tweet);
});