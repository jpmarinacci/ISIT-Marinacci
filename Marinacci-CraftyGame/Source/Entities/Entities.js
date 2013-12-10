/**
 * @author Charlie Calvert
 */

/* global angular:true */

angular.module('entitiesMod', ['speciesMod', 'entityData']).factory('people', function(entityDataFactory) {'use strict';

	var entities= {

		hero : {
			//species: this.species[4],
			// "class": this.classes[2],
			hitPoints : 15,
			damage : 2,
			
			getFromDataBase: function() {
				entityDataFactory.query({}, function(queryResult) {
            		entities.hero = queryResult[0].hero;
            	});	
				
			}
		},

		tower : function() {
			return {
				hitPoints : 6,
				damage : 1
			};
		}
	};
	
	entities.hero.getFromDataBase();
	return entities;
});
