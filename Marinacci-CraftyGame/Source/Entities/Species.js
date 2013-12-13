/**
 * @author JP
 */


angular.module('speciesMod', [])
.factory('speciesFactory', function($http) {'use strict';
	
	var species;
	species.loadSpecies = function() { 
	
		var getSpeciesFromJson = $http.get('species.json');
	
		getSpeciesFromJson.success(function(data, status, headers, config)  {
			console.log(data, status, headers, config);
			species = data;
		});
		
		getSpeciesFromJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load species from Json file');
		});
	}();
	return species;
});
