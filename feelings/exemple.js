// ./config.js
// > NOM_VAR=PLOP node config.js
// > PLOP
console.log(process.env.NOM_VAR);

module.exports = require('common-env/withLogger')(console).getOrElseAll({
  twitter:{
    consumer:{
      key: 'default',
      secret: 'default'
    },
    token:'',
    tokenSecret:'',
  }
});

// ./sentiment.js
var sentiment = require('sentiment');
// String -> POS|NEG|NEU
module.export = function(text){

};


// ./publisher.js
var TwitterStream = require('twitter-stream-api');
var sentiment = require('./sentiment');
var keys = {
    consumer_key : "your_consumer_key",
    consumer_secret : "your_consumer_secret",
    token : "your_access_token_key",
    token_secret : "your_access_token_secret"
};

var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/filter', {
  track: 'plop'
});

Twitter.on('data', function(tweet){
  tweet.sentiment = sentiment(tweet);
  send('tweet', tweet);
});


