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
	    	var route = new routeClass(this.container);
	    	route.run();
	    }else{
	    	location.pathname = '/';
	    }
	};
	
	return Application;
})();