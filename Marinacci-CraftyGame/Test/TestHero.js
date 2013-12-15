/**
 * @author Charlie
 */

describe("Test hero data", function() {'use strict';
		
	var heroFactory = null;
	var $httpBackend = null;
	
	beforeEach(function() {
		module('heroDataMod');
		module('configMod');				
	});
	
	beforeEach(inject(function($injector, _$httpBackend_) {
		heroFactory = $injector.get('hero');
		$httpBackend = _$httpBackend_;
	}));
	
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	it("can get a hero factory", function()  {	
		expect(heroFactory).toNotEqual(null);
	});
	
	/*
	it("can get a hero", function()  {
		$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/jpdata/collections/craftyGame?apiKey=8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG')
		.respond([{"hero" : { "health" : "20" , "damage" : "3"}}]);
		var actualHero = heroFactory.loadHeroFromData();
		expect(actualHero).toNotEqual(null);
		expect(actualHero.health).toEqual(20);
		//expect(actualHero.damage).toEqual(3);
		$httpBackend.flush();
	});
	*/
});