 /**
 * @author Charlie Calvert
 */

 /* jshint devel: true */

angular.module('dogPlayer', ['dogGameMod'])
.factory('gameEventService', function($rootScope) { 'use strict';
	return {
		message: "",

		hydrantBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('hydrantBroadcast');
			return true;
		},

		debugBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('debugBroadcast');
			return true;
		},

		encounterBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('encounterBroadcast');
		},

		changeDirectionBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('changeDirectionBroadcast');
			return true;
		},

		broadcastMessage: function(broadcastType) {
			$rootScope.$broadcast(broadcastType);
		}
	};
})
.controller('DogController', function($scope, gameEventService, dogGameService) { 'use strict';

	$scope.name = "Fido";
	$scope.eventNote = "no messages";
	$scope.messageDisplay = "";
	$scope.debugMessages = [];
	$scope.moveMessages = [];
	
	dogGameService.start();

	// This event is fired from inside crafty when a hydrant is found.
	// We need to call $apply because we are calling from Crafty, not from Angular.
	$scope.$on('hydrantBroadcast', function() {		
		$scope.$apply(function() { $scope.eventNote = gameEventService.message; });		
	});

	$scope.$on('debugBroadcast', function() {		
		$scope.$apply(function() { $scope.debugMessages.unshift(gameEventService.message); });		
	});

	$scope.$on('changeDirectionBroadcast', function() {
		$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.moveMessages.unshift(gameEventService.message); });	
	});

	$scope.$on('encounterBroadcast', function() {		
		$scope.$apply(function() { $scope.encounterMessage = gameEventService.message; });		
	});
});
