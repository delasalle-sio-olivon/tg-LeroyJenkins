var env = require('common-env/withLogger')(console);
module.exports = env.getOrElseAll({
    amqp: {
        ip:'amqp://192.168.99.100',
        canalIn: 'tweet',
        canalOut: 'sentiment'
    },
    twitter : {
        consumerKey: 'XTPatwzTzfJj5QudijmGzZmTQ',
        consumerSecret: 'ur4uSqkkNidm0RSFYdAwPrCIGvMlIaNtpuSmCTecVJmd155PhZ',
        token: '287769398-rxl3SrsQ5WmH4GKaqQ7XJty0mJBRob19gXpXGX1s',
        tokenSecret: 'LjpOauLCfOo3PeFx2j0jYr50JgHt7jsEY3sp8PirPxib9'
    },
    track: 'MLP'
});