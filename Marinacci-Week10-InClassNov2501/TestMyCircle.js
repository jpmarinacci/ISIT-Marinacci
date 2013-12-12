/**
 * @author Charlie
 */
describe("My Circle", function() {'use strict';

    var circle = null;

    beforeEach(function() {
        module('myCircleMod');
    });

    beforeEach(inject(function($injector) {
        circle = $injector.get('myCircleFactory');
    }));

    it("gets circle area", function() {
        expect(circle.areaOfCircle(0)).toEqual(0);
    });
    
    it("gets circle circumference", function() {
        expect(circle.circumferenceOfCircle(1)).toEqual(6.283185307179586);
    });
});

