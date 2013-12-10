/**
 * @author Charlie
 */

describe("Miles Converter Unit Test", function() {'use strict';
    var mileConverterController = null;
    var pc = null;
	beforeEach(function() {
		module('mileConverterApp');
	});
	
    beforeEach(inject(function($rootScope, $controller) {
        mileConverterController = $rootScope.$new();
        $controller('MileConverterController', { $scope: mileConverterController }); 
    }));
    
    it("Test Miles To Feet For One Mile", function() {
        mileConverterController.miles = 1;
        var actual = mileConverterController.convertMilesToFeet();
        expect(actual).toEqual(5280);
    });
   
    it("Test Miles To Feet For 2 Miles", function() {
        mileConverterController.miles = 2;
        var actual = mileConverterController.convertMilesToFeet();
        expect(actual).toEqual(10560);
    });
    
    it("Test Miles To Feet For Default", function() {
        var actual = mileConverterController.convertMilesToFeet();
        expect(actual).toEqual(0);
    });
    
    it("Test Miles To Inches For One Mile", function() {
        mileConverterController.miles = 1;
        var actual = mileConverterController.convertMilesToInches();
        expect(actual).toEqual(63360);
    });
    
    it("Test Miles To Yards For One Mile", function() {
        mileConverterController.miles = 1;
        var actual = mileConverterController.convertMilesToYards();
        expect(actual).toEqual(1760);
    });
    
    it("Test Miles To Kilometers For One Mile", function() {
        mileConverterController.miles = 1;
        var actual = mileConverterController.convertMilesToKilometers();
        expect(actual).toEqual(1.60934);
    });
    
    //it("Test Kilometers To Miles For One Kilometer", function() {
       // mileConverterController.kilometers = 1;
        //mileConverterController.$apply();
       // var actual = mileConverterController.miles;
       // expect(actual).toEqual(0.621371);
   // });
   
   //The user enters 0
    it("Test Miles To Feet For No Miles", function() {
        mileConverterController.miles = 0;
        var actual = mileConverterController.convertMilesToFeet();
        expect(actual).toEqual(0);
    });
    
    it("Test Miles To Inches For No Miles", function() {
        mileConverterController.miles = 0;
        var actual = mileConverterController.convertMilesToInches();
        expect(actual).toEqual(0);
    });
    
    it("Test Miles To Yards For No Miles", function() {
        mileConverterController.miles = 0;
        var actual = mileConverterController.convertMilesToYards();
        expect(actual).toEqual(0);
    });
    
    it("Test Miles To Kilometers For No Miles", function() {
        mileConverterController.miles = 0;
        var actual = mileConverterController.convertMilesToKilometers();
        expect(actual).toEqual(0);
    });
    
	//The user enters a negative number
	it("Test Miles To Feet For Negative One Mile", function() {
        mileConverterController.miles = -1;
        var actual = mileConverterController.convertMilesToFeet();
        expect(actual).toEqual(-5280);
    });
    
    it("Test Miles To Inches For Negative One Mile", function() {
        mileConverterController.miles = -1;
        var actual = mileConverterController.convertMilesToInches();
        expect(actual).toEqual(-63360);
    });
    
    it("Test Miles To Yards For Negative One Mile", function() {
        mileConverterController.miles = -1;
        var actual = mileConverterController.convertMilesToYards();
        expect(actual).toEqual(-1760);
    });
    
    it("Test Miles To Kilometers For Negative One Mile", function() {
        mileConverterController.miles = -1;
        var actual = mileConverterController.convertMilesToKilometers();
        expect(actual).toEqual(-1.60934);
    });
    
	//The user enters a really, really big number
	it("Test Miles To Feet For One Quadrillion Miles", function() {
        mileConverterController.miles = 1000000000000000;
        var actual = mileConverterController.convertMilesToFeet();
        expect(actual).toEqual(5280000000000000000);
    });
    
    it("Test Miles To Inches For One Quadrillion Miles", function() {
        mileConverterController.miles = 1000000000000000;
        var actual = mileConverterController.convertMilesToInches();
        expect(actual).toEqual(63360000000000000000);
    });
    
    it("Test Miles To Yards For One Quadrillion Miles", function() {
        mileConverterController.miles = 1000000000000000;
        var actual = mileConverterController.convertMilesToYards();
        expect(actual).toEqual(1760000000000000000);
    });
    
    it("Test Miles To Kilometers For One Quadrillion Miles", function() {
        mileConverterController.miles = 1000000000000000;
        var actual = mileConverterController.convertMilesToKilometers();
        expect(actual).toEqual(1609340000000000);
    }); 
});

