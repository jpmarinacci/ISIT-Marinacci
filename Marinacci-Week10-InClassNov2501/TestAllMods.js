// specs code
describe("Test All Modes", function() {'use strict';
	var addController = null;
	var circle = null;

	beforeEach(function() {
		module('myApp');
		module('circleMod');
		module('triangleMod');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		addController = $rootScope.$new();
		$controller('AddController', {
			$scope : addController
		});
		circle = $injector.get('circleFactory');
	}));

	it("gets circle area", function() {
		var radius = 6;
		var circleArea = Math.PI * radius * radius;
		expect(circle.areaOfCircle(6)).toEqual(circleArea);
	});
});

