var config = require('../config/config');
var bus = require('servicebus').bus({ url: config.amqp.ip });
var reader = require('./reader');

bus.listen(config.amqp.canalLang, function (tweet) {
  var sentiment = reader(tweet.text, tweet.lang);
  tweet.sentiment = sentiment;
  bus.publish(config.amqp.canalSentiment, tweet);
});