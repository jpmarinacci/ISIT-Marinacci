/**
 * @author JP
 */


angular.module('speciesMod', ['configMod'])
.factory('speciesFactory', function($http, configData) {'use strict';
	
	var speciesLoader ={};
	speciesLoader.species=[];
	speciesLoader.loadSpecies = function() { 
		console.log("load species called");
		var getSpeciesFromJson = $http.get('species.json');
	
		getSpeciesFromJson.success(function(data, status, headers, config)  {
			console.log(data);
			//console.log(data, status, headers, config);
			speciesLoader.species.push(data.species);
		});
		
		getSpeciesFromJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load species from Json file');
		});
	};
	if (configData.testing === false) {
		speciesLoader.loadSpecies();
	}
	
	var temp = ["Dwarf", "Halfling","Elf", "Human", "Dog"];
	speciesLoader.species=temp;
	return speciesLoader;
});
