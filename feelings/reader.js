var sentiment = require('sentiment');

module.exports = function (text){

    var result = sentiment(text);
    return result;

}