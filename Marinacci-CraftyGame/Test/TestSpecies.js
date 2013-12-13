/**
 * @author Charlie
 */

describe("Test Species", function() {'use strict';

	var species = null;

	beforeEach(function() {
		module('speciesMod');
	});

	beforeEach(inject(function($injector) {
		species = $injector.get('species');
	}));
	
	it("can get a species", function() {
		expect(species).toNotEqual(null);
	});

	it("can get a dwarf", function() {
		expect(species[0]).toEqual('Dwarf');
	});
	
	it("can get a hafling", function(){
		expect(species[1]).toEqual('Halfling');
	});
	
	it("can get an elf", function(){
		expect(species[2]).toEqual('Elf');
	});
	
	it("can get a human", function(){
		expect(species[3]).toEqual('Human');
	});
	
	it("can get a dog", function(){
		expect(species[4]).toEqual('Dog');
	});

}); 