var Fec = {};

$(function(){
	window.onbeforeunload = function (e) {
		var e = e || window.event;

		$(document).scrollTop(0);
	};
	
	var app = new Fec.Application(document.body);
	app.run(location);
});