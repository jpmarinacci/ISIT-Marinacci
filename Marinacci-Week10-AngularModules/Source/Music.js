/**
 * @author JP
 */
var app = angular.module('musicMod', [])
.factory('musicFactory', function() {
   return {
   	[{musician:'Beatles', album: 'Abbey Road'},
   	{musician:'Rolling Stones', album: "Get Yer Ya Ya's Out"},
   	{musicaian:'Led Zeppelin', album: 'Houses of the Holy'},
   	{musicaian:'Pink Floyd', album: 'Dark Side of the Moon'},
   	{musicaian:'The Doors', album: 'L.A. Woman'}
   	]
   };
});