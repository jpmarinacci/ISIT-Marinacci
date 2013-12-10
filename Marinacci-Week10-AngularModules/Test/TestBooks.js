/**
 * @author JP
 */

describe("Test Books", function() {'use strict';
	var searchController = null;
	var bookFactory = null;

	beforeEach(function() {
		module('musicAndBooksApp');
		module('booksMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		searchController = $rootScope.$new();
		$controller('SearchController', {
			$scope : searchController
		});
		bookFactory = $injector.get('bookFactory');
	}));

	it('gets bookFactory data', function() {
		expect(bookFactory !== null);
	});

	it('bookFactory book data is correct', function() {
		expect(bookFactory.books[0].book).toEqual('Lord of the Rings');
		expect(bookFactory.books[2].author).toEqual('John Steinbeck');
		expect(bookFactory.books[5].author).toEqual('Jack London');
	});

	it("gets book from author", function() {
		var book = bookFactory.getBookFromAuthor('Jack London');
		expect(book).toEqual('The Call of the Wild');
	});

	it("gets author from book", function() {
		var author = bookFactory.getAuthorFromBook('Dune');
		expect(author).toEqual('Frank Herbert');
	});

	it("search controller gets books", function() {
		expect(searchController.books).toEqual(bookFactory.books);
	});

	it('search controller gets book from author', function() {
		searchController.author = 'C.S. Lewis';
		searchController.getBookFromAuthor();
		expect(searchController.bookResult).toEqual('The Lion, The Witch and the Wardrobe');
	});

	it('search controller gets author from book', function() {
		searchController.book = 'Dune';
		searchController.getAuthorFromBook();
		expect(searchController.authorResult).toEqual('Frank Herbert');
	});

}); 