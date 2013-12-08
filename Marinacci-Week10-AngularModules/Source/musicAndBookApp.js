/**
 * @author JP
 */

var app = angular.module('musicAndBookApp', ['musicMod', 'bookMod'])
.controller('SearchController', function($scope, musicFactory,bookFactory) { 'use strict';
	
	$scope.albums = musicFactory.albums;

	$scope.getMusicianFromAlbum = function(){
		$scope.musicianResult = musicFactory.getMusicanFromAlbum($scope.album);
	};
	
	$scope.getAlbumFromMusician = function(){
		$scope.albumResult = musicFactory.getAlbumFromMusician($scope.musician);
	};
	
	$scope.books = bookFactory.books;
	
	$scope.getBookFromAuthor= function(){
		$scope.bookResult = bookFactory.getBookFromAuthor($scope.author);
	};
	
	$scope.getAuthorFromBook = function(){
		$scope.authorResult = bookFactory.getAuthorFromBook($scope.book);
	};
});