/**
 * @author JP
 */

Crafty.scene('Defeat', function() { 'use strict';
	// Display some text in celebration of the victory
	Crafty.e('2D, DOM, Text')
		.attr({ x: 0, y: 0 })
		.text("<div id='Banner'>Hydrant Soaked You!</div>")
        .textColor('#FF0000')
        .textFont({ family: 'Segoe', size: '48px', weight: 'bold' });

	Crafty.audio.play('uhOh');
	// restart the game when a key is pressed
	this.restart = function() {
		Crafty.scene('Game');
	};

	// Bind keydown event. This was done wrong in the demo
	this.bind('KeyDown', this.restart);
}, function() { 'use strict';
	// Remove key binding to prevent multiple restarts
	if (!this.unbind('KeyDown', this.restart)) {
		window.alert("Could not unbind");
	}

});