var config = require('../config/config');
var bus = require('servicebus').bus({ url: config.amqp.ip });
var reader = require('./reader');

bus.listen(config.amqp.canalTwitter, function (tweet) {
  var lang = reader(tweet.text, tweet.lang);
  tweet.lang = lang;
  bus.send(config.amqp.canalLang, tweet);
});