Fec.IndexRoute = (function() {
	function IndexRoute(container) {
		this.container = container;

		$.stellar({
			hideDistantElements: false,
			verticalOffset: 0
		});
	}

	IndexRoute.fn = IndexRoute.prototype;

	IndexRoute.fn.run = function() {
	    console.log('Index Route Running');

	    this.heightHeader();
	    this.scrollParalax();
	};

	IndexRoute.fn.heightHeader = function() {
	    var header = this.container.find('header');
	    var textura = this.container.find('.bg-textura');
	    var space = this.container.find('.space-top');
	    
	    header.css('height', $(window).height());
	    textura.css('height', $(window).height());
	    space.css('height', $(window).height());
	};

	IndexRoute.fn.scrollParalax = function() {
	    var $logoFec = $('.intro-logo');

	    $('header').parallax({imageSrc: '/assets/image/bg-header4.jpg'});

	};
	
	return IndexRoute;
})();
