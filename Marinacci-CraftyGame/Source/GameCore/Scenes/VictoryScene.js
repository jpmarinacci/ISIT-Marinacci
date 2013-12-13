/**
 * @author JP
 */

// Victory scene : Announce victory, set up a new level
Crafty.scene('Victory', function() { 'use strict';
	// Display some text in celebration of the victory
	Crafty.e('2D, DOM, Text')
		.attr({ x: 0, y: 0 })
		.text("<div id='Banner'>Level Passed!</div>").textFont({ family: 'Segoe',  size: '44px', weight: 'bold' }).textColor('#FF0000');

	// advance to the next level when a key is pressed
	this.nextLevel = function() {
		Crafty.game.level++;
		/*
		switch (Crafty.game.level){
			case 1:
			Crafty.game.level=2;
			break;
			case 2:
			Crafty.game.level=3;
			break;
			case 3:
			Crafty.game.level++;
			default:
			Crafty.game.level=1;		
		}
		*/
		Crafty.scene('Game');
	};
	

	// Bind keydown event. This was done wrong in the demo
	this.bind('KeyDown', this.nextLevel);
}, function() { 'use strict';
	// Remove key binding to prevent multiple restarts
	if (!this.unbind('KeyDown', this.nextLevel)) {
		window.alert("Could not unbind");
	}

});
