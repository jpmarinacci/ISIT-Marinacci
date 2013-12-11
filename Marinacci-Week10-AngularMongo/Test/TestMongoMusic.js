/**
 * @author JP
 */

describe("Test Mongo Music", function() {'use strict';
	var musicSearchController = null;
	var $httpBackend = null;
	var configurationData = null;

	beforeEach(function() {
		module('mongoMusicAndBooksApp');
		module('mongoMusicMod');
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

	it("can get music data", function() {
		$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/jpdata/collections/Music?apiKey=8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG').respond([{
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
		}]);
		musicSearchController.loadAlbumsFromData();
		$httpBackend.flush();
		expect(musicSearchController.albums[0].musician).toEqual('Beatles');
	});
	/*
	it("can get musician", function() {
		$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/jpdata/collections/Music?apiKey=8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG').respond([{
			"musician" : "Jimi Hendrix",
			"album" : "Are You Experienced"
		}, {
			"musician" : "Scorpions",
			"album" : "Crazy World"
		}]);
		musicSearchController.loadAlbumsFromData();
		$httpBackend.flush();
		var mockMusician = musicSearchController.musicFactory.getMusician();
		expect(mockMusician).toEqual('Jimi Hendrix');
	});
	*/
});
