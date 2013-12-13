/**
 * @author Charlie Calvert
 */

/* global angular:true */

angular.module('entitiesMod', ['heroDataMod',  'hydrantMod','speciesMod','classesMod']).factory('entities', function(hero, hydrant, species, classes) {'use strict';

	var specs = species;
	var entities = {

		hero : {
			species: species[4],
			"class": classes[6],
			hitPoints : 20,
			damage : 2,
			//loadHeroFromData : function() {
				//heroFactory.query({}, function(queryResult) {
					//entities.hero = queryResult[0].hero;
				//});
			//},
			loadHero : function() {
				if (hero){
					entities.hero = hero;
				}
			}
		},

		hydrant : function() {
			return {
				hitPoints : 6,
				damage : 1,
				loadHydrant : function() {
					entities.hydrant = hydrant;
				}
			};
		}
	};
	//entities.hero.loadHero();
	//entities.hero.loadHeroFromData();
	return entities;
});
