/**
 * @author JP
/**
 * @author JP
 */

describe("Test Music and Books", function() {'use strict';
	var searchController = null;
    var musicFactory = null;
    var bookFactory = null;

   	beforeEach(function() {
	    module('musicAndBookApp');
	    module('musicMod');
	    module('bookMod');
	 });
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		searchController = $rootScope.$new();
		$controller('SearchController', { $scope: searchController }); 
	    musicFactory = $injector.get('musicFactory');
	    bookFactory	= $injector.get('bookFactory');
	}));

    it('gets musicFactory data', function(){
    	expect(musicFactory!=null); 
    });
    
    it('musicFactory album data is correct', function(){
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
    
    it('search controller gets musician from album', function(){
    	searchController.album = 'Abbey Road';
    	searchController.getMusicianFromAlbum();
    	expect(searchController.musicianResult).toEqual('Beatles');
    });
    
    it('search controller gets album from musician', function(){
    	searchController.musician = 'Doors';
    	searchController.getAlbumFromMusician();
    	expect(searchController.albumResult).toEqual('L.A. Woman');
    });
    
    it('gets bookFactory data', function(){
    	expect(bookFactory!=null); 
    });
    
    it('bookFactory book data is correct', function(){
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
    
    it('search controller gets book from author', function(){
    	searchController.author = 'C.S. Lewis';
    	searchController.getBookFromAuthor();
    	expect(searchController.bookResult).toEqual('The Lion, The Witch and the Wardrobe');
    });
    
    it('search controller gets author from book', function(){
    	searchController.book = 'Dune';
    	searchController.getAuthorFromBook();
    	expect(searchController.authorResult).toEqual('Frank Herbert');
    });
    
});