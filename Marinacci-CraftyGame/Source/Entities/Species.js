/**
 * @author JP
 */

angular.module('speciesMod', ['configMod'])
.factory('speciesFactory', function($http, configData) {'use strict';
	
	var speciesFactory = {};
	speciesFactory.species = [];
	
	speciesFactory.loadSpecies = function() { 
		//console.log("load species called");
		var getSpeciesFromJson = $http.get('species.json');
	
		getSpeciesFromJson.success(function(data, status, headers, config)  {
			//console.log(data);
			//console.log(data, status, headers, config);
			//speciesFactory.species.push(data.species);
			return data.species;
		});
		
		getSpeciesFromJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load species from Json file');
		});
	};
	
	//if (configData.testing === false) {
		//speciesFactory.species.push(speciesFactory.loadSpecies());
	//}
	//else
	//{
		//speciesFactory.species= ["Dwarf", "Halfling","Elf", "Human", "Dog"];
	//}
	
	var temp = ["Dwarf", "Halfling","Elf", "Human", "Dog"];
	speciesFactory.species=temp;
	return speciesFactory;
});
