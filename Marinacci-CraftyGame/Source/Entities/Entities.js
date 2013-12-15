/**
 * @author Charlie Calvert
 */

/* global angular:true */

angular.module('entitiesMod', ['heroDataMod',  'hydrantMod','speciesMod','classesMod'])
.factory('entities', function(hero, hydrant, speciesFactory, classTypes) {'use strict';

	var entities = {

		hero : {
			species: speciesFactory.species[4],
			classType: classTypes.classes[Math.floor(Math.random()*3)+4],
			health : 20,
			damage : 3,
			loadHeroFromData : function() {
				heroFactory.query({}, function(queryResult) {
					entities.hero = queryResult[0].hero;
				});
			},
			/*
			loadHero : function() {
				if (hero){
					entities.hero.health = hero.health;
					entities.hero.damage = hero.damage;
				}
			}
			*/
		},
		
		//hydrant: hydrant
		hydrant : function() {
			return {
				health : 9,
				damage : 2,
				loadHydrant : function() {
					entities.hydrant = hydrant;
				}
			};
		}
		
	};
	
	//
	//entities.hero.loadHero();
	//entities.hero.loadHeroFromData();
	return entities;
});
