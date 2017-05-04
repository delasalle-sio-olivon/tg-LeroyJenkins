var config = require('../config/config');
var bus = require('servicebus').bus({ url: config.amqp.ip });
var tweet = {
  id: 629509643622985700,
  text: "Fuck you all bitch!",
  created_at: "Fri Aug 07 04:29:29 +0000 2015",
  source: "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
  lang: "fr",
  entities: {
    hashtags: [{ 
        text: "data" 
    }],
    user_mentions: [{ 
      screen_name: "mentionned_user" 
    }],
    media: [{ 
      type: "photo", 
      media_url: "http://pic.com/9J0WwAAEoU0.jpg" 
    }]
  },
  user: {
    screen_name: "twitter_user",
    name: "Full account name",
    followers_count: 229,
    friends_count: 225,
  },
  retweeted_status: {
      id: 000000,
      text: "",
      user: {},
  },
  quoted_status: {
      id: 000000,
      text: "",
      user: {},
  }
};

setInterval(function () {
    bus.send(config.amqp.canalIn, tweet);
}, 1000);
