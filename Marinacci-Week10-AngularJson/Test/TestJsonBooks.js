/**
 * @author JP
 */

describe("Test Books", function() {'use strict';
	var searchController = null;
	var bookFactory = null;

	beforeEach(function() {
		module('jsonMusicAndBooksApp');
		module('jsonBooksMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		searchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : searchController
		});
		bookFactory = $injector.get('bookFactory');
	}));

}); 