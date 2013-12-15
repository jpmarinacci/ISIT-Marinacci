/**
 * @author Charlie Calvert /JP
 */

/* jshint devel: true */

angular.module('dogPlayer', ['dogGameMod', 'ui.bootstrap', 'configMod'])
.factory('gameEventService', function($rootScope) {'use strict';
	return {
		message : "",

		broadcastMessage : function(broadcastType) {
			$rootScope.$broadcast(broadcastType);
		},

		debugBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('debugBroadcast');
			return true;
		},

		levelBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('levelBroadcast');
		},

		enemyCountBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('enemyCountBroadcast');
		},

		speciesBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('speciesBroadcast');
		},

		classBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('classBroadcast');
		},

		heroHealthBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('heroHealthBroadcast');
		},

		hydrantHealthBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('hydrantHealthBroadcast');
		},
		
		changeDirectionBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('changeDirectionBroadcast');
			return true;
		},

		encounterBroadcast : function(message) {
			this.message = message;
			this.broadcastMessage('encounterBroadcast');
		},
		
		pointsBroadcast: function(message){
			this.message=message;
			this.broadcastMessage('pointsBroadcast');
		}
	};
}).controller('DogController', function($scope, $dialog, gameEventService, dogGameService, configData) {'use strict';

	$scope.name = "Fido";
	$scope.speciesType = "";
	$scope.level = 1;
	$scope.classType = "";
	$scope.enemyCount = "";
	$scope.heroHealth = "";
	$scope.hydrantHealth = "";
	$scope.direction = "";
	$scope.messageDisplay = "";
	$scope.debugMessages = [];
	$scope.moveMessages = [];
	$scope.encounterMessages = [];
	$scope.points = 0;

	var dialogOptions = {
		controller : 'EditNameController',
		templateUrl : 'inputName.html'
	};

	$scope.inputName = function(name) {
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

	//if testing then don't pop up the edit Dialog
	if (!configData.testing) {
		$scope.inputName($scope.name);
	}
	dogGameService.start();

	$scope.$on('debugBroadcast', function() {
		$scope.$apply(function() {
			$scope.debugMessages.unshift(gameEventService.message);
		});
	});

	$scope.$on('changeDirectionBroadcast', function() {
		$scope.direction = gameEventService.message;
		$scope.$apply(function() {
			$scope.moveMessages.unshift(gameEventService.message);
		});
	});

	$scope.$on('encounterBroadcast', function() {
		$scope.encounterMessages.length = 0;
		$scope.$apply(function() {
			$scope.encounterMessages.push({
				'message' : gameEventService.message
			});
		});
	});

	$scope.$on('speciesBroadcast', function() {
		$scope.$apply(function() {
			$scope.speciesType = gameEventService.message;
		});
	});

	$scope.$on('classBroadcast', function() {
		$scope.$apply(function() {
			$scope.classType = gameEventService.message;
		});
	});

	$scope.$on('levelBroadcast', function() {
		$scope.$apply(function() {
			$scope.level = gameEventService.message;
		});
	});

	$scope.$on('enemyCountBroadcast', function() {
		$scope.$apply(function() {
			$scope.enemyCount = gameEventService.message;
		});
	});

	$scope.$on('heroHealthBroadcast', function() {
		$scope.$apply(function() {
			$scope.heroHealth = gameEventService.message;
		});
	});

	$scope.$on('hydrantHealthBroadcast', function() {
		$scope.$apply(function() {
			$scope.hydrantHealth = gameEventService.message;
		});
	});
	
	$scope.$on('pointsBroadcast', function() {
		$scope.$apply(function() {
			$scope.points = gameEventService.message;
		});
	});

});

// the dialog is injected in the specified controller
function EditNameController($scope, name, dialog) {'use strict';

	$scope.playerName = name;

	$scope.save = function() {
		dialog.close($scope.playerName);
	};

	$scope.close = function() {
		dialog.close(undefined);
	};
}