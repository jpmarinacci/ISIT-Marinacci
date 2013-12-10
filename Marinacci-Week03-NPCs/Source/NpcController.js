/**
 * @author Charlie Calvert
 */

angular.module('npcapp', ['ui.bootstrap'])
.controller('NpcController', function($scope, $dialog) { 'use strict';

    $scope.npcs = [];
    
    var defaultNpcs = [{
        npcName : 'Lucy',
        hitPoints : 25,
        health : 32,
        totalMoves : 0
    },{
        npcName : 'Defaulto',
        hitPoints : 8,
        health : 6,
        totalMoves : 7
    }, {
        npcName : 'Defaulta',
        hitPoints : 5,
        health : 3,
        totalMoves : 0
    }, {
        npcName : 'Reverta',
        hitPoints : 9,
        health : 9,
        totalMoves : 9
    }];
    
    $scope.npcs=defaultNpcs;

    var dialogOptions = {
        controller : 'EditCtrl',
        templateUrl : 'itemEdit.html'
    };

    $scope.edit = function(npc) {

        var itemToEdit = npc;

        $dialog.dialog(angular.extend(dialogOptions, {
            resolve : {
                npc : angular.copy(itemToEdit)
            }
        })).open().then(function(result) {
            if (result) {
                angular.copy(result, itemToEdit);
            }
            itemToEdit = undefined;
        });
    };
    
    $scope.newNPC = function(){
    	var npc = {
    		npcName : '',
		    hitPoints : 0,
		    health : 0,
		    totalMoves : 0
		    };
    $scope.npcs.push(npc);
    $scope.edit(npc);
    };
});

// the dialog is injected in the specified controller
function EditCtrl($scope, npc, dialog) {

    $scope.npc = npc;

    $scope.save = function() {
        dialog.close($scope.npc);
    };

    $scope.close = function() {
        dialog.close(undefined);
    };
}