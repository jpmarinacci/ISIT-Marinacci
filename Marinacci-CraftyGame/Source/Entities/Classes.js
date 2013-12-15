/**
 * @author JP
 */

angular.module('classesMod', ['configMod']).factory('classTypes', function($http, configData) {'use strict';

	/*
	if (!configData.testing) {
		//return $http.get('classes.json');
		return {
			classes : [],
			loadClasses : function() {
				console.log("load classes called");
				var getClassesFromJson = $http.get('classes.json');
				getClassesFromJson.success(function(data, status, headers, config) {
					console.log(data);
					this.classes = data.classes;
				});

				getClassesFromJson.error(function(data, status, headers, config) {
					console.log(data, status, headers, config);
					throw new Error('Could not load classes from Json file');
				});
			}
		};
	} else {
		*/
		return {
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		};
	//}
});
