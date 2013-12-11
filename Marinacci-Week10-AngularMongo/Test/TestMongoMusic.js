/**
 * @author JP
 */

describe("Test Mongo Music", function() {'use strict';
	var musicSearchController = null;
	var musicFactory = null;
	var $httpBackend = null;
	var configurationData = null;

	beforeEach(function() {
		module('mongoMusicAndBooksApp');
		module('mongoMusicMod');
		module('configMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		//configurationData = $injector.get();
		musicSearchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : musicSearchController
		});
		//musicFactory = $injector.get('musicFactory');
		
	}));
	
	beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    it("controller exists", function(){
    	expect(musicSearchController).toNotEqual(null);
    });
    
	it("can get music data", function() {
		$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/jpdata/collections/Music?apiKey=8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG')
		.respond([
			{
				"musician" : "Beatles",
				"album" : "Abbey Road"
			}, 
			{
				"musician" : "Rolling Stones",
				"album" : "Get Yer Ya Ya's Out"
			},
			 {
				"musician" : "Led Zeppelin",
				"album" : "Houses of the Holy"
			},
			{
				"musician" : "Pink Floyd",
				"album" : "Dark Side of the Moon"
			},
			 {
				"musician" : "Doors",
				"album" : "L.A. Woman"
			}, 
			{
				"musician" : "Eagles",
				"album" : "Hotel California"
			}]
		);
		musicSearchController.loadAlbumsFromData();
		$httpBackend.flush();
		expect(musicSearchController.albums[0].musician).toEqual('Beatles');
		//expect(musicSearchController.albums[0].albums.musician).toEqual('Beatles');
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
