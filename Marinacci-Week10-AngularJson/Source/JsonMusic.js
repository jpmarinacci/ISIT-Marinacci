/**
 * @author JP
 */
var app = angular.module('jsonMusicMod', [])
.factory('musicFactory', function() {
	return {
   	getMusicanFromAlbum : function(albums, albumName){
   		for(var i=0;i < albums.length; i++){
   			if(albums[i].album===albumName){
   				return albums[i].musician;
   			}
   		}
   	},
   	getAlbumFromMusician: function(albums, musicianName){
   		for(var i=0;i < albums.length; i++){
   			if(albums[i].musician===musicianName){
   				return albums[i].album;
   			}
   		}
   	}	
   };
});
