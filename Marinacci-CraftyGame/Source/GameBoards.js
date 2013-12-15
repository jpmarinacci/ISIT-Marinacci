/**
 * @author JP
 */

angular.module('gameBoardsMod', ['configMod'])
.factory('gameBoards', function($http, configData) {'use strict';


	//tempBoardsObject-ie json format
	var boardsObject = {
		
		"boards" : 
	[
		[
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 7, 0, 8, 0, 0, 1],
			[1, 0, 0, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
			[1, 6, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 4, 0, 1],
			[1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		], [
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
		], [
			[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 2],
			[2, 0, 4, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 4, 2],
			[2, 0, 0, 0, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 0, 2],
			[2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 4, 2],
			[2, 0, 3, 1, 0, 0, 6, 4, 0, 1, 0, 0, 1, 0, 4, 2],
			[2, 0, 0, 1, 4, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 2],
			[2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 2],
			[2, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
			[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
		],[
			[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
			[7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
			[7, 0, 2, 7, 0, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 7],
			[7, 0, 4, 7, 4, 7, 3, 0, 0, 0, 7, 0, 0, 2, 2, 7],
			[7, 6, 0, 7, 0, 7, 0, 7, 7, 0, 7, 2, 0, 3, 2, 7],
			[7, 0, 0, 7, 0, 7, 0, 5, 7, 0, 7, 3, 0, 3, 0, 7],
			[7, 0, 0, 7, 0, 7, 7, 7, 7, 0, 7, 0, 0, 4, 0, 7],
			[7, 0, 6, 7, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 0, 7],
			[7, 0, 4, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 7],
			[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
		]
	]
	};
	var boards = boardsObject.boards;
	
	//Charlie - this function seems to get back data, sets boards = to an array full of arrays - checked in the debugger
	//yet before I can send it back somehow boards becomes empty - ponderous
	
	boards.loadBoards = function() {

		$http.get('gameBoards.json').success(function(data, status, headers, config) {
			//console.log("load gameboards from json file success");
			//console.log(data);
			//console.log(data, status, headers, config);
			boards = data.boards;
			//console.log("boards array length = " + boards.length);
		}).error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load gameBoards from Json file');
		});
	};
	
	if (configData.testing===false){
		boards.loadBoards();
	}
	
	return boards;
});
