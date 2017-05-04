var bus = require('servicebus').bus({ url: "amqp://192.168.99.100" });
var reader = require('./reader.js');

bus.listen('tweeter', function (tweet) {
  var sentiment = reader(tweet.text);
  console.log(sentiment);
});