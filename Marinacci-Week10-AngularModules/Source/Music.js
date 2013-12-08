/**
 * @author JP
 */
var app = angular.module('musicMod', [])
.factory('musicFactory', function() {
   return {
   	albums: 	[{musician:'Beatles', album: 'Abbey Road'},
   	{musician:'Rolling Stones', album: "Get Yer Ya Ya's Out"},
   	{musician:'Led Zeppelin', album: 'Houses of the Holy'},
   	{musician:'Pink Floyd', album: 'Dark Side of the Moon'},
   	{musician:'The Doors', album: 'L.A. Woman'}
   	],
   	getMusicanFromAlbum : function(albumName){
   		for(var i=0;i < this.albums.length; i++){
   			if(this.albums[i].album===albumName){
   				return this.albums[i].musician;
   			}
   		}
   	},
   	getAlbumFromMusician: function(musicianName){
   		
   	}
   };
});