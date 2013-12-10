/**
 * @author JP
 */
var app = angular.module('musicMod', []).factory('musicFactory', function() {'use strict';
	return {
		albums : [{
			musician : 'Beatles',
			album : 'Abbey Road'
		}, {
			musician : 'Rolling Stones',
			album : "Get Yer Ya Ya's Out"
		}, {
			musician : 'Led Zeppelin',
			album : 'Houses of the Holy'
		}, {
			musician : 'Pink Floyd',
			album : 'Dark Side of the Moon'
		}, {
			musician : 'Doors',
			album : 'L.A. Woman'
		}, {
			musician : 'Eagles',
			album : 'Hotel California'
		}],
		getMusicanFromAlbum : function(albumName) {
			for (var i = 0; i < this.albums.length; i++) {
				if (this.albums[i].album === albumName) {
					return this.albums[i].musician;
				}
			}
		},
		getAlbumFromMusician : function(musicianName) {
			for (var i = 0; i < this.albums.length; i++) {
				if (this.albums[i].musician === musicianName) {
					return this.albums[i].album;
				}
			}
		}
	};
}); 