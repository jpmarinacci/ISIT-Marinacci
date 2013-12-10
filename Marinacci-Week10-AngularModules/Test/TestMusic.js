/**
 * @author JP
 */

describe("Test Music", function() {'use strict';
	var searchController = null;
	var musicFactory = null;

	beforeEach(function() {
		module('musicAndBooksApp');
		module('musicMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		searchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : searchController
		});
		musicFactory = $injector.get('musicFactory');
	}));

	it('gets musicFactory data', function() {
		expect(musicFactory !== null);
	});

	it('musicFactory album data is correct', function() {
		expect(musicFactory.albums[0].musician).toEqual('Beatles');
		expect(musicFactory.albums[2].musician).toEqual('Led Zeppelin');
		expect(musicFactory.albums[5].album).toEqual('Hotel California');
	});

	it("gets musician from album", function() {
		var musician = musicFactory.getMusicanFromAlbum('Dark Side of the Moon');
		expect(musician).toEqual('Pink Floyd');
	});

	it("gets album from musician", function() {
		var album = musicFactory.getAlbumFromMusician('Eagles');
		expect(album).toEqual('Hotel California');
	});

	it("search controller gets albums", function() {
		expect(searchController.albums).toEqual(musicFactory.albums);
	});

	it('search controller gets musician from album', function() {
		searchController.album = 'Abbey Road';
		searchController.getMusicianFromAlbum();
		expect(searchController.musicianResult).toEqual('Beatles');
	});

	it('search controller gets album from musician', function() {
		searchController.musician = 'Doors';
		searchController.getAlbumFromMusician();
		expect(searchController.albumResult).toEqual('L.A. Woman');
	});

}); 