/**
 * @author JP
 */

var app = angular.module('mongoMusicAndBooksApp', ['mongoMusicMod', 'mongoBooksMod'])
.controller('SearchController', function($scope, mongoMusicFactory, mongoBookFactory) { 'use strict';

	$scope.loadAlbumsFromData = function() {
        $scope.albums = mongoMusicFactory.query({}, function(albums) {
          $scope.albumsLength = albums.length;
          console.log($scope.albumsLength);
          //$scope.userIndexSelection = 0;      
          //$('#indexSelection').val("0");
          //$scope.indexChange();
        });
    }();
    
	//$scope.getMusicianFromAlbum = function(){
		//$scope.musicianResult = musicFactory.getMusicanFromAlbum($scope.album);
	//};
	
	//$scope.getAlbumFromMusician = function(){
		//$scope.albumResult = musicFactory.getAlbumFromMusician($scope.musician);
	//};
	  
	$scope.loadBooksFromData = function() {
        $scope.books = mongoBookFactory.query({}, function(books) {
          $scope.booksLength = books.length;
          console.log($scope.booksLength);
          //$scope.userIndexSelection = 0;      
          //$('#indexSelection').val("0");
          //$scope.indexChange();
        });
    }();
    
	//$scope.getBookFromAuthor= function(){
		//$scope.bookResult = bookFactory.getBookFromAuthor($scope.author);
	//};
	
	//$scope.getAuthorFromBook = function(){
		//$scope.authorResult = bookFactory.getAuthorFromBook($scope.book);
	//};
});