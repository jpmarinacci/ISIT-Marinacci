/**
 * @author JP
 */

angular.module('rollDiceApp', [])
.controller('RollDiceController', function($scope) {'use strict';
	
	$scope.dice=[];
	$scope.total;
	$scope.details='';
	
	$scope.clearDice = function(){
		$scope.dice.length=0;
		$scope.total=0;
		$scope.details='';
	};
	
	$scope.rollDice = function(number){
		var roll = Math.floor(Math.random() * number) + 1;
		$scope.dice.push(roll);
		$scope.total+=roll;   	
    	return roll;
    };
	
	$scope.roll6SidedDice = function(){
		$scope.clearDice();
		$scope.rollDice(6);
	};
	$scope.roll4SidedDice = function(){
		$scope.clearDice();
		$scope.rollDice(4);
	};
	$scope.roll10SidedDice = function(){
		$scope.clearDice();
		$scope.rollDice(10);
	};
	$scope.roll20SidedDice = function(){
		$scope.clearDice();
		$scope.rollDice(20);
	};
	$scope.roll2SixSidedDice = function(){
		$scope.clearDice();
		$scope.rollDice(6);
		$scope.rollDice(6);
		$scope.details=$scope.dice;
	};
	$scope.roll3SixSidedDice = function(){
		$scope.clearDice();
		for(var i=0;i<3;i++){
			$scope.rollDice(6);
		}
		$scope.details=$scope.dice;
	};
    
});
