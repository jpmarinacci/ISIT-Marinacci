/**
 * @author Charlie Calvert
 */


/* Set up a simple controller  */
var app = angular.module('musicAndBookApp', ['musicMod'])
.controller('SearchController', function($scope, musicFactory) { 'use strict';
	//$scope.music = musicFactory.albums;
	$scope.getMusicianFromAlbum = function(){
		$scope.musicianResult=musicFactory.getMusicanFromAlbum($scope.album);
	};
});