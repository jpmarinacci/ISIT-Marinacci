/**
 * @author JP
 */
/* global angular */

angular.module('heroDataMod', ['ngResource']).constant('CONFIG', {
	DB_NAME : 'jpdata',
	COLLECTION : 'craftyGame',
	API_KEY : '8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG'
}).factory('hero', function($resource, CONFIG) {'use strict';
	console.log('hero factory called');

	var hero;
	// https://api.mongolab.com/api/1/databases/jpdata/collections/craftyGame?apiKey=8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG
	
	var getHero = $resource('https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + '/collections/' + CONFIG.COLLECTION + '/:id', {
		apiKey : CONFIG.API_KEY
	}, {
		update : {
			method : 'PUT'
		}
	});
	var loadHeroFromData = function() {
		getHero.query({}, function(queryResult) {
			hero = queryResult[0].hero;
		});
	};
	//loadHeroFromData();
	return hero;
});
