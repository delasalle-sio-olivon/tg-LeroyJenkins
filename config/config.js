var env = require('common-env/withLogger')(console);
module.exports = env.getOrElseAll({
    amqp: {
        ip:'amqp://sacuqjih:omOG4lRsjCl-5Rn2-slRUjuHYmSGzxRf@lark.rmq.cloudamqp.com/sacuqjih',
        canalIn: 'tweet',
        canalOut: 'tweet.flow'
    },
    twitter : {
        consumerKey: 'XTPatwzTzfJj5QudijmGzZmTQ',
        consumerSecret: 'ur4uSqkkNidm0RSFYdAwPrCIGvMlIaNtpuSmCTecVJmd155PhZ',
        token: '287769398-rxl3SrsQ5WmH4GKaqQ7XJty0mJBRob19gXpXGX1s',
        tokenSecret: 'LjpOauLCfOo3PeFx2j0jYr50JgHt7jsEY3sp8PirPxib9'
    },
    track: 'MLP'
});