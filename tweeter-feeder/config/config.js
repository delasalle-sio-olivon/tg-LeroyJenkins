var env = require('common-env/withLogger')(console);
module.exports = env.getOrElseAll({
    amqp: {
        ip:'',
        canalTwitter: ''
    },
    twitter : {
        consumerKey: '',
        consumerSecret: '',
        token: '',
        tokenSecret: ''
    },
    track: ''
});


                                                                                                                    