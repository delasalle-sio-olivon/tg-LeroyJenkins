var TwitterStream = require('twitter-stream-api'), fs = require('fs');
const config = require('../config/config');
var amqp = require('amqplib/callback_api');
amqp.connect('amqp://sacuqjih:omOG4lRsjCl-5Rn2-slRUjuHYmSGzxRf@lark.rmq.cloudamqp.com/sacuqjih', function(err, conn) {
    conn.createChannel(function(err, ch) {
        
    });
});

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
    console.log('data', tweet);
}); 