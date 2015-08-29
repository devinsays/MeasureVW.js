/*jshint browser:true */
/*!
* MeasureVW 1.0.0
*
* Built by Devin Price
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

	'use strict';

	$.fn.MeasureVW = function() {

		var $selectors = $(this),
			resizeTimer;

		function logElementVW( $selectors ) {

			// Get the window width
			var windowWidth = window.outerWidth;

			$selectors.each( function() {

				// Get the selector width
				var selectorWidth = $(this).width();

				// Output measurements to log
				console.log( 'Calculating Viewport Width of ' +  this.tagName );
				console.log( 'Width of Element: ' + selectorWidth + 'px' );
				console.log( 'Width of View Port: ' + windowWidth + 'px' );
				console.log( 'Viewport Width of Element: ' + ( ( selectorWidth / windowWidth ) * 100 ) + 'vw' );
				console.log( '\n' );
			});
		}

		// When window is resized, measure selectors
		window.onresize = function( event ) {
			resizeTimer = setTimeout(
				logElementVW( $selectors ),
				500
			);
		}

	};

})( jQuery );