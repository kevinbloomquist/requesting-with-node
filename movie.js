console.log("Here we go!");

var requireRequestCommand = require("request");
var getMovie = function (title) {
	// console.log("get movie somehow");
    var info = requireRequestCommand("http://www.omdbapi.com/?t="+title,function(error,response,body){
    var answerObj = JSON.parse(body);
    	console.log(answerObj.Title);
    });

    };


    module.exports = getMovie;