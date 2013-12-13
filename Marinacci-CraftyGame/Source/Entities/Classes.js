/**
 * @author JP
 */


angular.module('classesMod', [])
.factory('classes', function($http) {'use strict';
	
	var classes=[];
	var loadClasses = function() { 
		console.log("load classes called");
		var getClassesFromJson = $http.get('classes.json');
	
		getClassesFromJson.success(function(data, status, headers, config)  {
			console.log(data);
			//console.log(data, status, headers, config);
			classes.push(data.classes);
		});
		
		getClassesFromJson.error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
			throw new Error('Could not load classes from Json file');
		});
	};
	loadClasses();
	return classes;
});