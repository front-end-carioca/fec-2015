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
	    this.animateSvg();

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

	IndexRoute.fn.animateSvg = function() {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
			var st = $(this).scrollTop();

			if (st > lastScrollTop){
				if(st >= 660){
					$('#Layer_1').find('path').attr('d', 'M2497,0.2l-251.51-0.1H2044.5h-176.99h-85.496h-220.489H1425h-52.466h-149.993h-68.997h-121.494h-205.49 H598.573H483.079H318.087L117,0.3L0,0.101v149.8h2560V0.101');
					$('.navMenu').addClass('compact animationNav');
				}
			}else{
				if(st < 660){
					$('#Layer_1').find('path').attr('d', 'M2497,0.3l-256,56l-198-40l-220,40l-44-36l-236,22L1425,0.2L1359,56h-156l-50-27.8l-122,42.2l-204-48	  l-240,46l-107-58l-133,102L117,0.4L0,88.4V150h2560V34.4');
					$('.navMenu').removeClass('compact animationNav');
				}
			}

			lastScrollTop = st;
		});
	};
	
	return IndexRoute;
})();
