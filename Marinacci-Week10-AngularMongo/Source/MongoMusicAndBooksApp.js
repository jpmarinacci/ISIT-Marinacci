/**
 * @author JP
 */

var app = angular.module('mongoMusicAndBooksApp', ['mongoMusicMod', 'mongoBooksMod', 'configMod'])
.controller('SearchController', function($scope, mongoMusicFactory, mongoBookFactory, configurationData) {'use strict';

	$scope.loadAlbumsFromData = function() {
		$scope.albums = mongoMusicFactory.query({}, function(albums) {
			$scope.albumsLength = albums.length;
			console.log($scope.albumsLength);
		});
	};

	$scope.loadBooksFromData = function() {
		$scope.books = mongoBookFactory.query({}, function(books) {
			$scope.booksLength = books.length;
			console.log($scope.booksLength);
		});
	};
	
	if (configurationData.testing === false) {
		$scope.loadAlbumsFromData();
		$scope.loadBooksFromData();
	}
	
}); 