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
		window.onload = function() {
			setTimeout(function() {
				$(document.body).scrollTop(0);
				$('body').addClass('hidden');
			}, 15);
		};

	    this.heightHeader();
	    this.scrollParalax();
	    this.bodyHidden();

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

	    $('header').parallax({imageSrc: '/assets/image/bg-header3.jpg'});

	};

	IndexRoute.fn.bodyHidden = function() {
	    var timeBody = setTimeout(function() {
	    	$('body').removeClass('hidden');
	    	clearTimeout(timeBody);
	    }, 3300);
	};
	
	return IndexRoute;
})();
