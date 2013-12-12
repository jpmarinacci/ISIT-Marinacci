/**
 * @author Charlie Calvert
 */

describe("Test Traingle", function() {'use strict';

    var triangle = null;

    beforeEach(function() {
        module('triangleMod');
    });

    beforeEach(inject(function($injector) {
        triangle = $injector.get('triangleFactory');
    }));

    it("Get triangle pythagoras", function() {
        expect(triangle.pythagoras()).toEqual(3);
    });
});

