/**
 * @author JP
 */

// specs code
describe("Test Game Map Grid", function() {'use strict';
		
	
	beforeEach(function() {
		module('gameWrapMod');
		module('dogGameMod');
		module('dogPlayer');				
	});
	
	it("TestGameBoard Check DogGame MapGrid Width", inject(function(dogGameService) {
		var mapGrid = {
			width : 16,
			height : 10,
			tile : {
				width : 48,
				height : 48
			}
		};
		var width=16;
		var tileWidth=48;
		var expectedWidth =width*tileWidth;
		dogGameService.start(mapGrid);
		var actual = dogGameService.width();		
		expect(actual).toEqual(expectedWidth);
	}));
	
	it("TestGameBoard Check DogGame MapGrid Height", inject(function(dogGameService) {
		var mapGrid = {
			width : 16,
			height : 10,
			tile : {
				width : 48,
				height : 48
			}
		};
		dogGameService.start(mapGrid);
		var height=10;
		var tileHeight=48;
		var expectedHeight = height*tileHeight;
		var actual = dogGameService.height();		
		expect(actual).toEqual(expectedHeight);
	}));
	
});

