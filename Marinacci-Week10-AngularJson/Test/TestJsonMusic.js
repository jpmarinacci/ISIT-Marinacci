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
		$controller('SearchController', { $scope: searchController }); 
	    musicFactory = $injector.get('musicFactory');
	}));
	
	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
    
    //it("Test loadAlbumsFromJson - musician field", function() {
		//$httpBackend.expectGET('albums.json').respond({"albums":[{"musician": "Jimi Hendrix", "album": "Are You Experencied"}]});
		//searchController.loadAlbums();
		//$httpBackend.flush();
		//expect(searchController.albums.musician).toEqual("Jimi Hendrix");
	//});
});