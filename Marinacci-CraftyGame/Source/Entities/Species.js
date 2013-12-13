/**
 * @author JP
 */


angular.module('speciesMod', [])
.factory('species', function($http) {'use strict';
	
	var species=[];
	var loadSpecies = function() { 
		console.log("load species called");
		var getSpeciesFromJson = $http.get('species.json');
	
		getSpeciesFromJson.success(function(data, status, headers, config)  {
			console.log(data, status, headers, config);
			species.push(data.species);
		});
		
		getSpeciesFromJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load species from Json file');
		});
	};
	loadSpecies();
	var temp = ["Dwarf", "Halfling","Elf", "Human", "Dog"];
	return temp;
});
