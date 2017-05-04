var sentiment = require('sentiment');
var sentimentFr = require('sentiment-french');
module.exports = function (text){

    if(lang === "fra"){
        var result = sentimentFr(text);
    }else{
        var result = sentiment(text);
    }
    return result;

}