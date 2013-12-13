/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('heroData', ['ngResource'])
.constant('CONFIG', {
	DB_NAME : 'jpdata',
	COLLECTION : 'craftyGame',
	API_KEY : '8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG'
}).factory('heroDataFactory', function($resource, CONFIG) {'use strict';
	console.log('hero data factory called');
	var hero = $resource('https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + '/collections/' + CONFIG.COLLECTION + '/:id', {
		apiKey : CONFIG.API_KEY
	}, {
		update : {
			method : 'PUT'
		}
	});

	return hero;
});

// https://api.mongolab.com/api/1/databases/jpdata/collections/craftyGame?apiKey=8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG