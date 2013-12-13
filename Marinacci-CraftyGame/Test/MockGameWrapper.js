/**
 * @author Charlie Calvert
 */

angular.module('gameWrapMod', [])
.factory('gameWrap', function() { 'use strict';
	return {
		startGame: function(gameDiv, dogGameService) {
			Crafty.game = dogGameService;
		},

		trigger: function() {

		}

	};
});

