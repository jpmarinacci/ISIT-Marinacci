/**
 * @author Charlie Calvert / JP
 */

/* global angular:true */

angular.module('entitiesMod', ['heroDataMod',  'hydrantMod','speciesMod','classesMod'])
.factory('entities', function(hero, hydrant, speciesTypes, classTypes) {'use strict';

	var entities = {

		//hero: hero,
		hero : {
			species: speciesTypes.species[4],
			classType: classTypes.classes[Math.floor(Math.random()*3)+4],
			health : 20,
			damage : 2,
			/*
			loadHeroFromData : function() {
				hero.query({}, function(queryResult) {
					entities.hero.health = queryResult[0].hero.health;
					entities.hero.damage = queryResult[0].hero.damage;
				});
			},
			*/
		},
		
		//hydrant: hydrant
		hydrant : function() {
			return {
				health : 9,
				damage : 2,
				/*
				loadHydrant : function() {
					entities.hydrant = hydrant;
				}
				*/
			};
		}
		
	};

	//entities.hero.loadHeroFromData();
	return entities;
});
