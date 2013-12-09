/**
 * @author JP
 */

describe("Test Music", function() {'use strict';
	var searchController = null;
    var musicFactory = null;

   	beforeEach(function() {
	    module('jsonMusicAndBooksApp');
	    module('jsonMusicMod');
	 });
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		searchController = $rootScope.$new();
		$controller('SearchController', { $scope: searchController }); 
	    musicFactory = $injector.get('musicFactory');
	}));

    
});