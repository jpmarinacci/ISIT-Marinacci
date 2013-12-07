/**
 * @author Charlie
 */

describe("Miles Converter Unit Test", function() {'use strict';
    var $mockScope = null;
    var pc = null;
	beforeEach(function() {
		module('mileConverterApp');
	});
	
    beforeEach(inject(function($rootScope, $controller) {
        $mockScope = $rootScope.$new();
        pc = $controller('MileConverterController', { $scope: $mockScope }); 
    }));
    
    it("Test Miles To Feet For One Mile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(5280);
    });
   
    it("Test Miles To Feet For 2 Miles", function() {
        $mockScope.miles = 2;
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(10560);
    });
    
    it("Test Miles To Feet For Default", function() {
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(0);
    });
    
    it("Test Miles To Inches For One Mile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToInches();
        expect(actual).toEqual(63360);
    });
    
    it("Test Miles To Yards For One Mile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToYards();
        expect(actual).toEqual(1760);
    });
    
    it("Test Miles To Kilometers For One Mile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToKilometers();
        expect(actual).toEqual(1.60934);
    });
    
    //it("Test Kilometers To Miles For One Kilometer", function() {
       // $mockScope.kilometers = 1;
        //$mockScope.$apply();
       // var actual = $mockScope.miles;
       // expect(actual).toEqual(0.621371);
   // });
   
   //The user enters 0
    it("Test Miles To Feet For No Miles", function() {
        $mockScope.miles = 0;
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(0);
    });
    
    it("Test Miles To Inches For No Miles", function() {
        $mockScope.miles = 0;
        var actual = $mockScope.convertMilesToInches();
        expect(actual).toEqual(0);
    });
    
    it("Test Miles To Yards For No Miles", function() {
        $mockScope.miles = 0;
        var actual = $mockScope.convertMilesToYards();
        expect(actual).toEqual(0);
    });
    
    it("Test Miles To Kilometers For No Miles", function() {
        $mockScope.miles = 0;
        var actual = $mockScope.convertMilesToKilometers();
        expect(actual).toEqual(0);
    });
    
	//The user enters a negative number
	it("Test Miles To Feet For Negative One Mile", function() {
        $mockScope.miles = -1;
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(-5280);
    });
    
    it("Test Miles To Inches For Negative One Mile", function() {
        $mockScope.miles = -1;
        var actual = $mockScope.convertMilesToInches();
        expect(actual).toEqual(-63360);
    });
    
    it("Test Miles To Yards For Negative One Mile", function() {
        $mockScope.miles = -1;
        var actual = $mockScope.convertMilesToYards();
        expect(actual).toEqual(-1760);
    });
    
    it("Test Miles To Kilometers For Negative One Mile", function() {
        $mockScope.miles = -1;
        var actual = $mockScope.convertMilesToKilometers();
        expect(actual).toEqual(-1.60934);
    });
    
	//The user enters a really, really big number
	it("Test Miles To Feet For One Quadrillion Miles", function() {
        $mockScope.miles = 1000000000000000;
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(5280000000000000000);
    });
    
    it("Test Miles To Inches For One Quadrillion Miles", function() {
        $mockScope.miles = 1000000000000000;
        var actual = $mockScope.convertMilesToInches();
        expect(actual).toEqual(63360000000000000000);
    });
    
    it("Test Miles To Yards For One Quadrillion Miles", function() {
        $mockScope.miles = 1000000000000000;
        var actual = $mockScope.convertMilesToYards();
        expect(actual).toEqual(1760000000000000000);
    });
    
    it("Test Miles To Kilometers For One Quadrillion Miles", function() {
        $mockScope.miles = 1000000000000000;
        var actual = $mockScope.convertMilesToKilometers();
        expect(actual).toEqual(1609340000000000);
    }); 
});

