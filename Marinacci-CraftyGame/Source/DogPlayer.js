 /**
 * @author Charlie Calvert
 */

 /* jshint devel: true */

angular.module('dogPlayer', ['dogGameMod', 'ui.bootstrap'])
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
		
		speciesBroadcast: function(message){
			this.message=message;
			this.broadcastMessage('speciesBroadcast');
		},
		
		classBroadcast: function(message){
			this.message=message;
			this.broadcastMessage('classBroadcast');
		},
		
		levelBroadcast: function(message){
			this.message=message;
			this.broadcastMessage('levelBroadcast');
		},
		
		heroHealthBroadcast: function(message){
			this.message=message;
			this.broadcastMessage('heroHealthBroadcast');
		},
		
		hydrantHealthBroadcast: function(message){
			this.message=message;
			this.broadcastMessage('hydrantHealthBroadcast');
		},
		
		enemyCountBroadcast: function(message){
			this.message=message;
			this.broadcastMessage('enemyCountBroadcast');
		},

		broadcastMessage: function(broadcastType) {
			$rootScope.$broadcast(broadcastType);
		}
	};
})
.controller('DogController', function($scope, $dialog, gameEventService, dogGameService) { 'use strict';

	$scope.name = "";
	$scope.speciesName = "";
	$scope.level=1;
	$scope.className="";
	$scope.enemyCount = "";
	$scope.heroHealth = "";
	$scope.hydrantHealth ="";
	$scope.direction = "";
	$scope.messageDisplay = "";
	$scope.debugMessages = [];
	$scope.moveMessages = [];
	$scope.encounterMessages = [];

	var dialogOptions = {
		controller : 'EditCtrl',
		templateUrl : 'inputName.html'
	};

	$scope.edit = function(name) {
		var itemToEdit = name;
		$dialog.dialog(angular.extend(dialogOptions, {
			resolve : {
				name : angular.copy(itemToEdit)
			}
		})).open().then(function(result) {
			if (result) {
				$scope.name = result;
			}
		});
	};
	
	$scope.edit($scope.name);
	dogGameService.start();

	$scope.$on('debugBroadcast', function() {		
		$scope.$apply(function() { $scope.debugMessages.unshift(gameEventService.message); });		
	});

	$scope.$on('changeDirectionBroadcast', function() {
		$scope.direction = gameEventService.message;
		$scope.$apply(function() { $scope.moveMessages.unshift(gameEventService.message); });	
	});

	$scope.$on('encounterBroadcast', function() {
		$scope.encounterMessages.length = 0;			
		$scope.$apply(function() { $scope.encounterMessages.push({'message': gameEventService.message}); });		
	});
	
	$scope.$on('speciesBroadcast', function() {		
		$scope.$apply(function() { $scope.speciesName= gameEventService.message; });		
	});
	
	$scope.$on('classBroadcast', function() {		
		$scope.$apply(function() { $scope.className= gameEventService.message; });		
	});
	
	$scope.$on('levelBroadcast', function() {		
		$scope.$apply(function() { $scope.level= gameEventService.message; });		
	});
	
	$scope.$on('enemyCountBroadcast', function() {		
		$scope.$apply(function() { $scope.enemyCount= gameEventService.message; });		
	});
	
	$scope.$on('heroHealthBroadcast', function() {		
		$scope.$apply(function() { $scope.heroHealth= gameEventService.message; });		
	});
	
	$scope.$on('hydrantHealthBroadcast', function() {		
		$scope.$apply(function() { $scope.hydrantHealth= gameEventService.message; });		
	});
	
});

// the dialog is injected in the specified controller
function EditCtrl($scope, name, dialog) {'use strict';
	
	$scope.playerName = name;
	
	$scope.save = function() {
		dialog.close($scope.playerName);
	};

	$scope.close = function() {
		dialog.close(undefined);
	};
}