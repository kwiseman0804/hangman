var Word = require("./word.js");

module.exports = {

	selectWord: function() {
		var words = ["harry potter", "ron weasley", "serverus snape", "albus dumbledore", "hermione granger", "draco malfoy", "ginny weasley", "remus lupin", "nymphadora tonks", "george weasley", "fred weasley", "percy weasley", "kingsley shacklebolt", "molly weasley", "charlie weasley", "arthur weasley", "bill weasley", "fleur delacore", "lucious malfoy", "sirius black", "james potter", "lily potter"];
		var num = Math.floor(Math.random() * 10);
		var word = new Word (words[num]);
		return word;
	}
};