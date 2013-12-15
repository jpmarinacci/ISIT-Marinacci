/**
 * @author JP
 */

// specs code
describe("Test Entities", function() {'use strict';

	var entities = null;

	beforeEach(function() {
		module('entitiesMod');
	});

	beforeEach(inject(function($injector) {
		entities = $injector.get('entities');
	}));

	it("can get entities", function() {
		var actual = entities;
		expect(actual).toNotEqual(null);
	});

	it("can get a hero", function() {
		var actualHero = entities.hero;
		expect(actualHero).toNotEqual(null);
	});

	it("can get hero species", function() {
		var actualHero = entities.hero;
		expect(actualHero.species).toNotEqual(null);
	});

	it("can get hero class type", function() {
		var actualHero = entities.hero;
		expect(actualHero.classType).toNotEqual(null);
	});

	it("can get hero health", function() {
		var actualHero = entities.hero;
		expect(actualHero.health).toNotEqual(null);
	});

	it("can get hero default health", function() {
		var actualHero = entities.hero;
		expect(actualHero.health).toEqual(20);
	});

	it("can get hero damage", function() {
		var actualHero = entities.hero;
		expect(actualHero.damage).toNotEqual(null);
	});

	it("can get hero default damage", function() {
		var actualHero = entities.hero;
		expect(actualHero.damage).toEqual(2);
	});

	it("can get a hydrant", function() {
		var actualHydrant = entities.hydrant;
		expect(actualHydrant).toNotEqual(null);
	});

	it("can get hydrant default health", function() {
		var actualHydrant = entities.hydrant();
		expect(actualHydrant.health).toEqual(9);
	});
	
	it("can get hydrant default damage", function() {
		var actualHydrant = entities.hydrant();
		expect(actualHydrant.damage).toEqual(2);
	});

});

