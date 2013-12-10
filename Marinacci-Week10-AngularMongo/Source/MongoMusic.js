/**
 * @author JP
 */
var app = angular.module('mongoMusicMod', ['ngResource']).constant('CONFIG', {
	DB_NAME : 'jpdata',
	COLLECTION : 'Music',
	API_KEY : '8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG'
}).factory('mongoMusicFactory', function($resource, CONFIG) {'use strict';
	console.log('music data factory called');

	var music = $resource('https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + '/collections/' + CONFIG.COLLECTION + '/:id', {
		apiKey : CONFIG.API_KEY
	}, {
		update : {
			method : 'PUT'
		}
	});

	music.prototype.updateMe = function(callback, errorCallback) {
		console.log("update called");
		return music.update({
			id : this._id.$oid
		}, angular.extend({}, this, {
			_id : undefined
		}), callback, errorCallback);
	};

	music.prototype.getMusician = function() {
		return this.musician;
	};

	music.prototype.getAlbum = function() {
		return this.album;
	};

	music.prototype.remove = function(cb, errorcb) {
		return music.remove({
			id : this._id.$oid
		}, cb, errorcb);
	};

	music.prototype['delete'] = function(cb, errorcb) {
		return this.remove(cb, errorcb);
	};

	return music;
}); 