/**
 * @author Charlie
 */

describe("Roll Dice Unit Test", function() {'use strict';
    var diceController = null;
    var pc = null;
	beforeEach(function() {
		module('rollDiceApp');
	});
	
    beforeEach(inject(function($rootScope, $controller) {
        diceController = $rootScope.$new();
        $controller('RollDiceController', { $scope: diceController }); 
    }));
    
    it("Test Roll 4 Sided Dice", function() {
        
        var count = 0;
        var inDiceRange = true;
        var roll4D;
        while (count <= 250){
        	roll4D = diceController.roll4SidedDice();
        	if(roll4D > 4 || roll4D < 1){
        		inDiceRange=false;
        	}
        	count++;
        }
        expect(inDiceRange).toBeTruthy();
    });
    it("Test Roll 6 Sided Dice", function() {
        
        var count = 0;
        var inDiceRange = true;
        var roll6D;
        while (count <= 250){
        	roll6D = diceController.roll6SidedDice();
        	if(roll6D > 6 || roll6D < 6){
        		inDiceRange=false;
        	}
        	count++;
        }
        expect(inDiceRange).toBeTruthy();
    });
    it("Test Roll 10 Sided Dice", function() {
        
        var count = 0;
        var inDiceRange = true;
        var roll10D;
        while (count <= 250){
        	roll10D = diceController.roll10SidedDice();
        	if(roll10D > 10 || roll10D < 1){
        		inDiceRange=false;
        	}
        	count++;
        }
        expect(inDiceRange).toBeTruthy();
    });
    it("Test Roll 20 Sided Dice", function() {
        
        var count = 0;
        var inDiceRange = true;
        var roll20D;
        while (count <= 250){
        	roll20D = diceController.roll20SidedDice();
        	if(roll20D > 20 || roll20D < 1){
        		inDiceRange=false;
        	}
        	count++;
        }
        expect(inDiceRange).toBeTruthy();
    });
    it("Test Roll 2 Six Sided Dice", function() {
        
        var count = 0;
        var nextCount=0;
        var inDiceRange = true;
        var dice=[];
        while (count <= 250){
        	diceController.roll2SixSidedDice();
        	dice=diceController.dice;
        	while(nextCount< dice.length){
        		if(dice[nextCount]>6||dice[nextCount]<1){
        			inDiceRange=false;
        		}
        		nextCount++;
        	}
        	count++;
        }
        expect(inDiceRange).toBeTruthy();
    });
    it("Test Roll 3 Six Sided Dice", function() {
        
        var count = 0;
        var nextCount=0;
        var inDiceRange = true;
        var dice=[];
        while (count <= 250){
        	diceController.roll3SixSidedDice();
        	dice=diceController.dice;
        	while(nextCount< dice.length){
        		if(dice[nextCount]>6||dice[nextCount]<1){
        			inDiceRange=false;
        		}
        		nextCount++;
        	}
        	count++;
        }
        expect(inDiceRange).toBeTruthy();
    });
});