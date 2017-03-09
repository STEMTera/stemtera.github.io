// Called as: document.getElementsByRegex("pattern").
// Returns an array of all elements matching a given regular expression on id.
// 'pattern' argument is a regular expression string.
//
document['getElementsByRegex'] = function(pattern){
	var arrElements = [];   // to accumulate matching elements
	var re = new RegExp(pattern);   // the regex to match with

	function findRecursively(aNode) { // recursive function to traverse DOM
		if (!aNode) 
		return;
		if (aNode.id !== undefined && aNode.id.search(re) != -1)
		arrElements.push(aNode);  // FOUND ONE!
		for (var idx in aNode.childNodes) // search children...
		findRecursively(aNode.childNodes[idx]);
	};

	findRecursively(document); // initiate recursive matching
	return arrElements; // return matching elements
};

function scrollToAnchor(aid){
	$('html,body').animate({scrollTop: aid.offset().top},500);
}

var frontpages = 3;
var startpage = 1;
var i = startpage; 
var Pages = document.getElementsByRegex('^page*');
var totalPage = Pages.length;
console.log(totalPage);

$(document).keydown(function (event) {
	if (event.keyCode == 33) {
		if(i>startpage) {
			i--;
			scrollToAnchor($("#page"+i+""));
		}
		event.preventDefault();
	} else if (event.keyCode == 34) {
		if (i<totalPage) {
			i++;
			scrollToAnchor($("#page"+i+""));
		}
		event.preventDefault();
	}
	console.log(i); //gives the default message
});
