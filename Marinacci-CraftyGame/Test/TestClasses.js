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

	it("can get classes", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadClasses();
		expect(classTypes).toNotEqual(null);
		$httpBackend.flush();
	});

	it("can get a cleric", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadClasses();
		expect(classTypes.classes[0]).toEqual('Cleric');
		$httpBackend.flush();
	});
	it("can get a fighter", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadClasses();
		expect(classTypes.classes[1]).toEqual('Fighter');
		$httpBackend.flush();
	});

	it("can get a thief", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadClasses();
		expect(classTypes.classes[2]).toEqual('Thief');
		$httpBackend.flush();
	});

	it("can get a wizard", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadClasses();
		expect(classTypes.classes[3]).toEqual('Wizard');
		$httpBackend.flush();
	});

	it("can get a mutt", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadClasses();
		expect(classTypes.classes[4]).toEqual('Mutt');
		$httpBackend.flush();
	});
	
	it("can get a scavenger", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadClasses();
		expect(classTypes.classes[5]).toEqual('Scavenger');
		$httpBackend.flush();
	});
	
	it("can get a mutt", function() {
		$httpBackend.expectGET('classes.json').respond({
			"classes" : ["Cleric", "Fighter", "Thief", "Wizard", "Mutt", "Scavenger", "Attack Dog"]
		});
		classTypes.loadClasses();
		expect(classTypes.classes[6]).toEqual('Attack Dog');
		$httpBackend.flush();
	});
});
