/**
 * @author JP
 */

describe("Test Books", function() {'use strict';
	var booksSearchController = null;
	var $httpBackend = null;
	var configurationData = null;

	beforeEach(function() {
		module('jsonMusicAndBooksApp');
		module('jsonBooksMod');
		module('configMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		booksSearchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : booksSearchController
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
		expect(booksSearchController).toNotEqual(null);
	});

	it("can get books data - author field", function() {
		$httpBackend.expectGET('books.json').respond({
			"books" : [{
				"book" : "Lord of the Rings",
				"author" : "J.R. Tolkien"
			}, {
				"book" : "The Lion, The Witch and the Wardrobe",
				"author" : "C.S. Lewis"
			}, {
				"book" : "The Grapes of Wrath",
				"author" : "John Steinbeck"
			}, {
				"book" : "Lord of the Flies",
				"author" : "William Golding"
			}, {
				"book" : "Dune",
				"author" : "Frank Herbert"
			}, {
				"book" : "The Call of the Wild",
				"author" : "Jack London"
			}]
		});
		booksSearchController.loadBooksFromJson();
		$httpBackend.flush();
		expect(booksSearchController.books[1].author).toEqual('C.S. Lewis');
	});
});
