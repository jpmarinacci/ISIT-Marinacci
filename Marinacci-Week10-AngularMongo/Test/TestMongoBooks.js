/**
 * @author JP
 */

describe("Test Mongo Books", function() {'use strict';
	var booksSearchController = null;
	var bookFactory = null;
	var $httpBackend = null;

	beforeEach(function() {
		module('mongoMusicAndBooksApp');
		module('mongoBooksMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		booksSearchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : booksSearchController
		});
		bookFactory = $injector.get('bookFactory');
	}));
	
	beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
	
	
}); 