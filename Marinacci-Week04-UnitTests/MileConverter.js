/**
 * @author Charlie
 */
angular.module('mileConverterApp', ['ui.bootstrap']);

function MileConverterController($scope) {
    
    $scope.miles = 0;
    $scope.kilometers = 0;
    
    $scope.$watch('miles', function(){
    	$scope.kilometers = $scope.miles * 1.60934;
    });
    
    $scope.$watch('kilometers', function(){
    	$scope.miles = $scope.kilometers / 1.60934;
    });
    
    $scope.convertMilesToInches = function(){
    	return $scope.miles * 63360;
    };
    
    $scope.convertMilesToFeet = function() {
        return $scope.miles * 5280;  
    };
    
    $scope.convertMilesToYards = function(){
    	return $scope.miles * 1760;
    };
    
    $scope.convertMilesToKilometers = function(){
    	return $scope.miles * 1.60934;
    };  
}
