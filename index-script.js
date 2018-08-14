$(document).ready(function(){
  $('.parallax').parallax();
});

var navigate = function(toViewName) {
	var allPages = document.getElementsByClassName("marketing-page");
	console.log("gettin it ", toViewName, allPages);
	for (var i = 0; i < allPages.length; i++) {
		allPages[i].style.display = "none";
	}

	document.getElementById(toViewName + "-page").style.display = "block";
};