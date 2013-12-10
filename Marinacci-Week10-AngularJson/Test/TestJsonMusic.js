/**
 * @author JP
 */

describe("Test Music", function() {'use strict';
	var searchController = null;
	var musicFactory = null;
	var $httpBackend = null;

	beforeEach(function() {
		module('jsonMusicAndBooksApp');
		module('jsonMusicMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		searchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : searchController
		});
		musicFactory = $injector.get('musicFactory');
	}));

	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it("Test loadAlbumsFromJson - musician field", function() {
		$httpBackend.expectGET('albums.json').respond({
			"albums" : [{
				"musician" : "Jimi Hendrix",
				"album" : "Are You Experencied"
			}]
		});
		searchController.loadAlbumsFromJson();
		$httpBackend.flush();
		expect(searchController.albums.musician).toEqual("Jimi Hendrix");
	});

	//Example Test
	/*it("Test load json name", function() {
		$httpBackend.expectGET('data.json').respond({
			"name" : "NPC01",
			"hitPoints" : 1,
			"damage" : 2
		});
		myController.loadJson();
		$httpBackend.flush();
		expect(myController.data.name).toEqual("NPC01");
	});*/

});
