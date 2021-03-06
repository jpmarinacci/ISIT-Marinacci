/**
 * @author JP
 */

describe("Test Game Boards Module", function() {'use strict';
	var $httpBackend = null;
	var boards = null;

	beforeEach(function() {
		module('gameBoardsMod');
		module('configMod');
	});

	beforeEach(inject(function(gameBoards, _$httpBackend_) {
		boards = gameBoards;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it("can get gameBoards Factory", function() {
		expect(boards).toNotEqual(null);
	});
	
	it("can get boards data", function() {
		$httpBackend.expectGET('gameBoards.json').respond({
			"boards" :
				[[
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[1, 0, 0, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
					[1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1],
					[1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 4, 0, 1],
					[1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
				], [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 2],
					[2, 0, 4, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 4, 2],
					[2, 0, 0, 0, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 0, 2],
					[2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 4, 2],
					[2, 0, 3, 1, 0, 0, 1, 4, 0, 1, 0, 0, 1, 0, 4, 2],
					[2, 0, 0, 1, 4, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 2],
					[2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 2],
					[2, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
				],[
					[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
					[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[1, 3, 3, 2, 0, 2, 3, 3, 3, 2, 2, 2, 3, 0, 0, 2],
					[2, 3, 0, 2, 2, 2, 3, 0, 3, 2, 0, 2, 3, 0, 0, 1],
					[1, 3, 0, 2, 0, 2, 3, 3, 3, 2, 2, 0, 3, 0, 0, 2],
					[2, 3, 3, 2, 0, 2, 3, 0, 3, 2, 0, 2, 3, 3, 3, 1],
					[1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
					[2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 0, 1],
					[1, 0, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 0, 2],
					[2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]
				]]
		});
		boards.loadBoards();
		var actualLength = boards.length;
		expect(boards).toNotEqual(null);
		expect(actualLength).toNotEqual(0);
		$httpBackend.flush();
	});
	
	it("can get gameBoards count", function(){
		var actual = boards.numberOfBoards();
		expect(actual).toEqual(boards.length);
	});
	
	it("can get total number of enemies in all game boards", function(){
		var actual = boards.countTotalEnemies();
		expect(actual).toBeGreaterThan(25);
	});
	
	it("can get total number of food items in all game boards", function(){
		var actual = boards.countTotalFoodItems();
		expect(actual).toBeGreaterThan(50);
	});
	
	/*
	it("can get an error when loading Json", function() {
		$httpBackend.expectGET('gameBoards.json').respond('');
		expect(boards.loadBoards()).to.throwError();
		$httpBackend.flush();
	});
	*/
});

