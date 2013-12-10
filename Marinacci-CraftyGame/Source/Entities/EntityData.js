/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('entityData', ['ngResource'])
.constant('CONFIG', {
    DB_NAME: 'jpdata',
    COLLECTION: 'craftyGame',
    API_KEY: '8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG'
})
.factory('entityDataFactory', function($resource, CONFIG) {
	console.log('entity data factory called');
	var Entities = $resource(
        'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + 
        '/collections/' + CONFIG.COLLECTION + '/:id', {      
        apiKey: CONFIG.API_KEY     
    },
    {
        update: {method:'PUT'}
    });

    return Entities;    	
});
