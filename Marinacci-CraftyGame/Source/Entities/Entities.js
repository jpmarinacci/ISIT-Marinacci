/**
 * @author Charlie Calvert
 */

/* global angular:true */

angular.module('entitiesMod', ['speciesMod', 'heroData']).factory('entities', function(heroDataFactory) {'use strict';

	var entities= {

		hero : {
			//species: this.species[4],
			// "class": this.classes[2],
			hitPoints : 0,
			damage : 2,
			
			loadHeroFromData: function() {
				heroDataFactory.query({}, function(queryResult) {
            		entities.hero = queryResult[0].hero;
            	});	
				
			}
		},

		hydrant : function() {
			return {
				hitPoints : 6,
				damage : 1
			};
		}
	};
	
	entities.hero.loadHeroFromData();
	return entities;
});
