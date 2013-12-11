/**
 * @author JP
 */

describe("Test Music", function() {'use strict';
	var musicSearchController = null;
	var $httpBackend = null;
	var configurationData = null;

	beforeEach(function() {
		module('jsonMusicAndBooksApp');
		module('jsonMusicMod');
		module('configMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		musicSearchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : musicSearchController
		});
	}));

	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	it("controller exists", function() {
		expect(musicSearchController).toNotEqual(null);
	});

	it("can get music data - album field", function() {
		$httpBackend.expectGET('albums.json').respond({
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
		});
		musicSearchController.loadAlbumsFromJson();
		$httpBackend.flush();
		expect(musicSearchController.albums[2].album).toEqual('Houses of the Holy');
	});
	/*
	 //Example
	 it("Test load json name", function() {
	 $httpBackend.expectGET('data.json').respond({
	 "name": "NPC01",
	 "hitPoints": 1,
	 "damage": 2
	 });
	 myController.loadJson();
	 $httpBackend.flush();
	 expect(myController.data.name).toEqual("NPC01");
	 });
	 */

});
