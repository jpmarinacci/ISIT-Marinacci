/**
 * @author JP
 */

/* global angular:true */

angular.module('speciesMod', ['configMod'])
.factory('speciesTypes', function($http, configData) {'use strict';

	var speciesTypes = {};
	speciesTypes.species = [];

	speciesTypes.loadSpecies = function() {
		console.log("load species called");
		var getSpeciesFromJson = $http.get('species.json');

		getSpeciesFromJson.success(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			return data.species;
		});

		getSpeciesFromJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load species from Json file');
		});
	};

	//if (configData.testing === false) {
		//speciesTypes.species.push(speciesTypes.loadSpecies());
	//} else {
		var temp = ["Dwarf", "Halfling", "Elf", "Human", "Dog"];
		speciesTypes.species = temp;
	//}
		return speciesTypes;

});
