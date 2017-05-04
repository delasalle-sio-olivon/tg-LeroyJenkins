var TwitterStream = require('twitter-stream-api'), fs = require('fs');
const config = require('../config/config');
var amqp = require('amqplib/callback_api');
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

//Twitter.pipe(fs.createWriteStream('tweets.json'));

Twitter.on('connection success', function (uri) {
    console.log('connection success', uri);
});

Twitter.on('data', function(tweet) {
    sendTweet(tweet);
}); 

function sendTweet(tweet) {
    bus.send(config.amqp.canalIn, tweet);
}