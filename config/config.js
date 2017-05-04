var env = require('common-env/withLogger')(console);
module.exports = env.getOrElseAll({
    amqp: {
        ip:'amqp://192.168.99.100',
        canalIn: 'twitter',
        canalOut: 'tweet.flow'
    },
    twitter : {
        consumerKey: '',
        consumerSecret: '',
        token: '',
        tokenSecret: ''
    },
    track: 'javascript'
});