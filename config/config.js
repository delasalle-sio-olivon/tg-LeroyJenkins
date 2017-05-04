var env = require('common-env/withLogger')(console);
module.exports = env.getOrElseAll({
    amqp: {
        ip:'',
        canalIn: '',
        canalOut: ''
    },
    twitter : {
        consumerKey: '',
        consumerSecret: '',
        token: '',
        tokenSecret: ''
    },
    track: ''
});

