var TwitterStream = require('twitter-stream-api');

/*    consumer_key : "XTPatwzTzfJj5QudijmGzZmTQ",
    consumer_secret : "ur4uSqkkNidm0RSFYdAwPrCIGvMlIaNtpuSmCTecVJmd155PhZ",
    token : "287769398-rxl3SrsQ5WmH4GKaqQ7XJty0mJBRob19gXpXGX1s",
    token_secret : "LjpOauLCfOo3PeFx2j0jYr50JgHt7jsEY3sp8PirPxib9"*/
    
const config = require('../config/config');

//mettre var d'env
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

