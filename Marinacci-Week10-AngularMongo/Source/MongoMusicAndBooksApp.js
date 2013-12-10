/**
 * @author JP
 */

var app = angular.module('mongoMusicAndBooksApp', ['mongoMusicMod', 'mongoBooksMod'])
.controller('SearchController', function($scope, mongoMusicFactory, mongoBookFactory) {'use strict';

	$scope.loadAlbumsFromData = function() {
		$scope.albums = mongoMusicFactory.query({}, function(albums) {
			$scope.albumsLength = albums.length;
			console.log($scope.albumsLength);
		});
	}();

	$scope.loadBooksFromData = function() {
		$scope.books = mongoBookFactory.query({}, function(books) {
			$scope.booksLength = books.length;
			console.log($scope.booksLength);
		});
	}();
}); 