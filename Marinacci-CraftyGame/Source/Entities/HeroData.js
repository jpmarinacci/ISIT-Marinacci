/**
 * @author JP
 */
/* global angular */

angular.module('heroDataMod', ['ngResource', 'configMod']).constant('CONFIG', {
	DB_NAME : 'jpdata',
	COLLECTION : 'craftyGame',
	API_KEY : '8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG'
}).factory('hero', function($resource, configData, CONFIG) {'use strict';
	//console.log('hero factory called');

	var heroLoader = $resource('https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + '/collections/' + CONFIG.COLLECTION + '/:id', {
		apiKey : CONFIG.API_KEY
	}, {
		update : {
			method : 'PUT'
		}
	});
	/*
	heroLoader.hero={};
	heroLoader.loadHeroFromData = function() {
			heroLoader.query({}, function(queryResult) {
			console.log(queryResult);
			return queryResult[0].hero;
		});
	};
	
	heroLoader.prototype.getHeroHealth = function() {
		return this.health;
	};
	
	heroLoader.prototype.getHeroHealth = function() {
		return this.damage;
	};
	*/
	// https://api.mongolab.com/api/1/databases/jpdata/collections/craftyGame?apiKey=8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG
	//if(configData.testing === false){
		//heroLoader.loadHeroFromData();
	//}
	
	return heroLoader;
});
