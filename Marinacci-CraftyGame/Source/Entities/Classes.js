/**
 * @author JP
 */

angular.module('classesMod', ['configMod'])
.factory('classesFactory', function($http, configData) {'use strict';
	
	var classesFactory = {};
	classesFactory.classes=[];
	
	classesFactory.loadClasses = function() { 
		console.log("load classes called");
		var getClassesFromJson = $http.get('classes.json');
	
		getClassesFromJson.success(function(data, status, headers, config)  {
			console.log(data);
			//console.log(data, status, headers, config);
			classesFactory.classes.push(data.classes);
		});
		
		getClassesFromJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load classes from Json file');
		});
	};

	if (configData.testing === false) {
		classesFactory.loadClasses();
	}
	
	var temp = ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"];
	classesFactory.classes=temp;
	return classesFactory;
});