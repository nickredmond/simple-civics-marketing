$(document).ready(function(){
  $('.parallax').parallax();
});

var navigate = function(fromViewName, toViewName) {
	document.getElementById(fromViewName + "-view").display = "none";
	document.getElementById(toViewName + "-view").display = "block";
};