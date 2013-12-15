/**
 * @author JP
 */

/* global angular:true */

angular.module('classesMod', ['configMod'])
.factory('classTypes', function($http, configData) {'use strict';

	var classTypes = {};
	classTypes.classes = [];

	classTypes.loadClasses = function() {
		console.log("load classType called");
		var getClassesFromJson = $http.get('classes.json');
		
		getClassesFromJson.success(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			return data.classes;
		});

		getClassesFromJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load classes from Json file');
		});
	};

	//if (!configData.testing) {
		//classTypes.classes.push(classTypes.loadClasses());
	//} else {
		var temp = ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"];
		classTypes.classes = temp;
	//}
		return classTypes;
		
});
