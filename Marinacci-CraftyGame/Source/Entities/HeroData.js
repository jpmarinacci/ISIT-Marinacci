/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('heroData', ['ngResource'])
.constant('CONFIG', {
    DB_NAME: 'jpdata',
    COLLECTION: 'craftyGame',
    API_KEY: '8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG'
})
.factory('heroDataFactory', function($resource, CONFIG) {
	console.log('hero data factory called');
	var Hero = $resource(
        'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + 
        '/collections/' + CONFIG.COLLECTION + '/:id', {      
        apiKey: CONFIG.API_KEY     
    },
    {
        update: {method:'PUT'}
    });

    return Hero;    	
});
