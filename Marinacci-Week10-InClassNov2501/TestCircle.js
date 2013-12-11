/**
 * @author Charlie
 */
describe("Test Circle", function() {'use strict';

    var circle = null;

    beforeEach(function() {
        module('circleMod');
    });

    beforeEach(inject(function($injector) {
        circle = $injector.get('circleFactory');
    }));

    it("gets Circle area", function() {
    	var radius = 3;
    	var circleArea = Math.PI * radius*radius;
        expect(circle.areaOfCircle(3)).toEqual(circleArea);
    });
    
    it("gets Circle circumference", function() {
    	var radius = 3;
    	var circleCircumference = Math.PI * (radius*2);
        expect(circle.circumferenceOfCircle(3)).toEqual(circleCircumference);
    });
    
});

