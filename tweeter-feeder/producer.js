var TwitterStream = require('twitter-stream-api');
const config = require('../config/config');
var bus = require('servicebus').bus({ url: config.amqp.ip });

var keys = {
    consumer_key : config.twitter.consumerKey,
    consumer_secret : config.twitter.consumerSecret,
    token : config.twitter.token,
    token_secret : config.twitter.tokenSecret
};

var Twitter = new TwitterStream(keys, true);

Twitter.stream('statuses/filter', {
    track: config.track
});

Twitter.on('connection success', function (uri) {
    console.log('connection success', uri);
});

Twitter.on('data', function(tweet) {
    sendTweet(tweet);
}); 

function sendTweet(tweet) {
    bus.send(config.amqp.canalIn, tweet);
}