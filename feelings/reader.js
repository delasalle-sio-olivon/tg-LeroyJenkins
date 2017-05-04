var sentiment = require('sentiment');

module.export=function (text){

var result = sentiment(text);
return result;
}