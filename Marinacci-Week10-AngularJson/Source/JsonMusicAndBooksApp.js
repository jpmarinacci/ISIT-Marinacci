/**
 * @author JP
 */

var app = angular.module('jsonMusicAndBooksApp', ['jsonMusicMod', 'jsonBooksMod'])
.controller('SearchController', function($scope, $http, musicFactory, bookFactory) { 'use strict';
	 
	$scope.loadAlbumsFromJson = function() { 
	
		var getDataJson = $http.get('albums.json');
	
		getDataJson.success(function(data, status, headers, config)  {
			console.log(data, status, headers, config);
			$scope.albums = data.albums;
		});
		
		getDataJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load albums from Json file');
		});
	}();
	
	$scope.getMusicianFromAlbum = function(){
		$scope.musicianResult = musicFactory.getMusicanFromAlbum($scope.albums, $scope.album);
	};
	
	$scope.getAlbumFromMusician = function(){
		$scope.albumResult = musicFactory.getAlbumFromMusician($scope.albums, $scope.musician);
	};
	
	$scope.loadBooksFromJson = function() { 
	
		var getDataJson = $http.get('books.json');
	
		getDataJson.success(function(data, status, headers, config)  {
			console.log(data, status, headers, config);
			$scope.books = data.books;
		});
		
		getDataJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load books from Json file');
		});
	}();
	
	$scope.getBookFromAuthor= function(){
		$scope.bookResult = bookFactory.getBookFromAuthor($scope.books, $scope.author);
	};
	
	$scope.getAuthorFromBook = function(){
		$scope.authorResult = bookFactory.getAuthorFromBook($scope.books, $scope.book);
	};

});
