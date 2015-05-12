/**
 * Generate brocheta
 * @author nalancer08 <github.com/nalancer08>
 * @license MIT
 * @version  1.0
 */
;(function($){
	$.brocheta = {
		defaults: {
			className: 'fecha'
		}
	};
		$.fn.brocheta = function(options) {

			if (!this.length) { return this; }
	
	  		var opts = $.extend(true, {}, $.brocheta.defaults, options);

	  		this.each(function() {

	  			var el = $(this);
	  			var div = $('.'+opts.className);
	  			var fecha = div.data('fin');

	  			var calcula = function() {
				var date = moment(fecha),
					now = moment(),
					diff = date.diff( now );
				el.html( moment.duration( diff ).format( 'dd [<small>días</small>] hh [<small>hrs</small>] mm [<small>min</small>] ss [<small>seg</small>]' ) );
				};
				calcula();
				setInterval(calcula, 500);
	  			
	  		});
	  		return this;
		};

})(jQuery);
