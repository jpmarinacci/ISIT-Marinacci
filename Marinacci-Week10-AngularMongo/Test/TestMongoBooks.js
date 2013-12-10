/**
 * @author JP
 */

describe("Test Mongo Books", function() {'use strict';
	var searchController = null;
    var bookFactory = null;

   	beforeEach(function() {
	    module('mongoMusicAndBooksApp');
	    module('mongoBooksMod');
	 });
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		searchController = $rootScope.$new();
		$controller('SearchController', { $scope: searchController }); 
	    bookFactory	= $injector.get('bookFactory');
	}));
    
});