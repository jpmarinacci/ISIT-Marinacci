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

}); 