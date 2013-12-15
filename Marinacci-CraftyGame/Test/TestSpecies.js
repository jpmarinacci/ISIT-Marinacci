/**
 * @author Charlie
 */

describe("Test Species", function() {'use strict';

	var speciesFactory = null;
	var $httpBackend = null;
	var configurationData = null;

	beforeEach(function() {
		module('speciesMod');
		module('configMod');
	});

	beforeEach(inject(function($injector) {
		speciesFactory = $injector.get('speciesFactory');
	}));

	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	it("can get species", function() {
		$httpBackend.expectGET('species.json').respond({
			"species" : ["Dwarf", "Halfling", "Elf", "Human", "Dog"]
		});
		speciesFactory.loadSpecies(speciesFactory);
		expect(speciesFactory).toNotEqual(null);
		$httpBackend.flush();
	});
	
	it("can get a dwarf", function() {
		$httpBackend.expectGET('species.json').respond({
			"species" : ["Dwarf", "Halfling", "Elf", "Human", "Dog"]
		});
		speciesFactory.species.push(speciesFactory.loadSpecies());
		expect(speciesFactory.species[0]).toEqual('Dwarf');
		$httpBackend.flush();
	});
	
	it("can get a hafling", function() {
		$httpBackend.expectGET('species.json').respond({
			"species" : ["Dwarf", "Halfling", "Elf", "Human", "Dog"]
		});
		speciesFactory.loadSpecies();
		expect(speciesFactory.species[1]).toEqual('Halfling');
		$httpBackend.flush();
	});

	it("can get an elf", function() {
		$httpBackend.expectGET('species.json').respond({
			"species" : ["Dwarf", "Halfling", "Elf", "Human", "Dog"]
		});
		speciesFactory.loadSpecies();
		expect(speciesFactory.species[2]).toEqual('Elf');
		$httpBackend.flush();
	});

	it("can get a human", function() {
		$httpBackend.expectGET('species.json').respond({
			"species" : ["Dwarf", "Halfling", "Elf", "Human", "Dog"]
		});
		speciesFactory.loadSpecies();
		expect(speciesFactory.species[3]).toEqual('Human');
		$httpBackend.flush();
	});

	it("can get a dog", function() {
		$httpBackend.expectGET('species.json').respond({
			"species" : ["Dwarf", "Halfling", "Elf", "Human", "Dog"]
		});
		speciesFactory.loadSpecies();
		expect(speciesFactory.species[4]).toEqual('Dog');
		$httpBackend.flush();
	});
	
});
