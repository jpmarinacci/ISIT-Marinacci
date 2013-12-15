/**
 * @author Charlie
 */

describe("Test hydrant", function() {'use strict';
		
	var hydrant = null;
	
	beforeEach(function() {
		module('hydrantMod');				
	});
	
	beforeEach(inject(function($injector) {
		hydrant = $injector.get('hydrant');
	}));
	
	it("can get a hydrant template", function()  {
		var actual = hydrant;
		expect(actual).toNotEqual(null);
	});
	
	it("can make a hydrant", function()  {
		var testHydrant = {
				health : 9,
				damage : 2
			};
		var actualHydrant = hydrant.hydrant();
		expect(actualHydrant.health).toEqual(testHydrant.health);
		expect(actualHydrant.damage).toEqual(testHydrant.damage);
	});
});