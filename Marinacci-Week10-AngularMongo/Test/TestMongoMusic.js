/**
 * @author JP
 */

describe("Test Mongo Music", function() {'use strict';
	var searchController = null;
	var musicFactory = null;

	beforeEach(function() {
		module('mongoMusicAndBooksApp');
		module('mongoMusicMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		searchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : searchController
		});
		musicFactory = $injector.get('musicFactory');
	}));
	it("can get music data", function() {
		$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/jpdata/collections/address?apiKey=8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG')
		.respond([{
			"albums" : [{
				"musician" : "Beatles",
				"album" : "Abbey Road"
			}, {
				"musician" : "Rolling Stones",
				"album" : "Get Yer Ya Ya's Out"
			}, {
				"musician" : "Led Zeppelin",
				"album" : "Houses of the Holy"
			}, {
				"musician" : "Pink Floyd",
				"album" : "Dark Side of the Moon"
			}, {
				"musician" : "Doors",
				"album" : "L.A. Woman"
			}, {
				"musician" : "Eagles",
				"album" : "Hotel California"
			}]
		}]);
		searchController.loadAlbumsFromData();
		$httpBackend.flush();
		expect(searchController.albums[0].musician).toEqual('Beatles');
	});
	//Example Test
	/*it("can get data", function() {
		$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
		.respond([{
			presidentName : "George Washington",
			termEnd : 1,
			termStart : 11
		}, {
			presidentName : "John Adams",
			termEnd : 2,
			termStart : 22
		}, {
			presidentName : "Thomas Jefferson",
			termEnd : 3,
			termStart : 33
		}]);
		mainController.loadData();
		$httpBackend.flush();
		expect(mainController.presidents[0].presidentName).toEqual('George Washington');
	});*/

});
