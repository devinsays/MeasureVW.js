# MeasureVW.js

### A jQuery plugin for measuring elements as a percentage of viewport width (vw units)

This is a simple developer tool to identifying image sizes in vw units for responsive images using srcset. If you have paddings and margins on elements that contain images, it can sometimes be difficult to calculate the image width in vw units. Do you really want to do all that math?

This code is only meant to be used while developing a project. Make sure to remove when finished.

## How it works

Identify the selector(s) you wish to measure:

```html
$('.post-thumbnail img').MeasureVW();
```

To view the measurements, open your console log and resize your screen.

![Console Log](screenshot.jpg?raw=true "Console Log")

## No jQuery?

No problem, just copy/paste this vanilla javascript and change the selector to the one you wish to measure:

```js
( function() {

	var resizeTimer;

	function logElementVW( selector ) {
		
		// Output measurements to log
		console.log( 'Width of Element: ' + selector.width + 'px' );
		console.log( 'Width of View Port: ' + window.outerWidth + 'px' );
		console.log( 'Viewport Width of Element: ' + ( ( selector.width / window.outerWidth ) * 100 ) + 'vw' );
		console.log( '\n' );
				
	}

	window.onresize = function( event ) {
		
		//Define selector here
		var selector = document.getElementsByClassName( 'wp-post-image' )[0]
		
		resizeTimer = setTimeout(
			logElementVW( selector ),
			500
		);
	}

} )();
```