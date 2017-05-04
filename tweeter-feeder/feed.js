var TwitterStream = require('twitter-stream-api'), fs = require('fs');

var keys = {
    consumer_key : "XTPatwzTzfJj5QudijmGzZmTQ",
    consumer_secret : "ur4uSqkkNidm0RSFYdAwPrCIGvMlIaNtpuSmCTecVJmd155PhZ",
    token : " 287769398-rxl3SrsQ5WmH4GKaqQ7XJty0mJBRob19gXpXGX1s",
    token_secret : "LjpOauLCfOo3PeFx2j0jYr50JgHt7jsEY3sp8PirPxib9"
};

var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/filter', {
    track: 'javascript'
});

Twitter.pipe(fs.createWriteStream('tweets.json'));
