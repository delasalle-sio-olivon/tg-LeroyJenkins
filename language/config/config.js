var env = require('common-env/withLogger')(console);
module.exports = env.getOrElseAll({
    amqp: {
        ip:'',
        canalTwitter: '',
        canalLang: '',
        canalSentiment: ''
    }
});


                                                                                                                    