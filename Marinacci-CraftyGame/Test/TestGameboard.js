/**
 * @author Charlie Calvert
 */

// specs code
describe("TestGameboard", function() {'use strict';
		
	
	beforeEach(function() {
		module('gameWrapMod');
		module('dogGameMod');
		module('dogPlayer');				
	});
	/*
	it("TestGameBoard Check DogGame Width", inject(function(dogGameService) {
		var mapGrid = {
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		};
		dogGameService.start(mapGrid);
		var actual = dogGameService.width();		
		expect(actual).toEqual(576);
	}));
	*/
});

