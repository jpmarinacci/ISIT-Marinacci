/**
 * @author Charlie
 */

describe("Test classes", function() {'use strict';

	var classTypes = null;
	var $httpBackend = null;
	var configurationData = null;
	
	beforeEach(function() {
		module('classesMod');
		module('configMod');
	});

	beforeEach(inject(function($injector, _$httpBackend_) {
		classTypes = $injector.get('classTypes');
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	/*
	it("can get classes", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadclasses();
		expect(classTypes).toNotEqual(null);
		$httpBackend.flush();
	});

	/*
	it("can get a dwarf", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadclasses();
		expect(classTypes.classes[0]).toEqual('Dwarf');
		$httpBackend.flush();
	});
	it("can get a hafling", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadclasses();
		expect(classTypes.classes[1]).toEqual('Halfling');
		$httpBackend.flush();
	});

	it("can get an elf", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadclasses();
		expect(classTypes.classes[2]).toEqual('Elf');
		$httpBackend.flush();
	});

	it("can get a human", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadclasses();
		expect(classTypes.classes[3]).toEqual('Human');
		$httpBackend.flush();
	});

	it("can get a dog", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadclasses();
		expect(classTypes.classes[4]).toEqual('Dog');
		$httpBackend.flush();
	});
	*/
});
