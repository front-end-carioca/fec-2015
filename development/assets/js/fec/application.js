Fec.Application = (function() {
	function Application(container) {
		this.container = $(container);

		this.routes = {
			'/': Fec.IndexRoute
		}
	}

	Application.fn = Application.prototype;

	Application.fn.run = function(location) {
	    var routeClass = this.routes[location.pathname];
	    if (routeClass) {
	    	var cookie = $.cookie('animation') == undefined ? false : true;
	    	var route = new routeClass(this.container);
	    	route.run(cookie);
	    }else{
	    	location.pathname = '/';
	    }
	};
	
	return Application;
})();