/**
 * @author Charlie Calvert
 */

angular.module('gameWrapMod', [])
.constant('CONFIG',{
	testing: false
})
.factory('gameWrap', function() { 'use strict';
	return {
		startGame: function(gameDiv, dogGameService) {
			Crafty.init(dogGameService.width(), dogGameService.height(), gameDiv);
			Crafty.game = dogGameService;
			Crafty.background('rgb(0, 109, 20)'); //green background
			// Load the game
			Crafty.scene('Loading');
		},

		trigger: function() {

		}

	};
});

