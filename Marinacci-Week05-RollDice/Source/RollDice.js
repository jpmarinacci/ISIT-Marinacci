/**
 * @author JP
 */

angular.module('rollDiceApp', []);

function RollDiceController($scope) {
	
	$scope.dice=[];
	$scope.total;
	$scope.details='';
	
	clearDice=function(){
		$scope.dice.length=0;
		$scope.total=0;
		$scope.details='';
	};
	
	rollDice = function(number){
		var roll = Math.floor(Math.random() * number) + 1;
		$scope.dice.push(roll);
		$scope.total+=roll;   	
    	return roll;
    };
	
	$scope.roll6SidedDice = function(){
		clearDice();
		rollDice(6);
	};
	$scope.roll4SidedDice = function(){
		clearDice();
		rollDice(4);
	};
	$scope.roll10SidedDice = function(){
		clearDice();
		rollDice(10);
	};
	$scope.roll20SidedDice = function(){
		clearDice();
		rollDice(20);
	};
	$scope.roll2SixSidedDice = function(){
		clearDice();
		rollDice(6);
		rollDice(6);
		$scope.details=$scope.dice;
	};
	$scope.roll3SixSidedDice = function(){
		clearDice();
		for(i=0;i<3;i++){
			rollDice(6);
		}
		$scope.details=$scope.dice;
	};
    
}
