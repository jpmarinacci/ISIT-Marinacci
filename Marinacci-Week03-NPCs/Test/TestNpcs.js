/**
 * @author Charlie
 */

describe("NPC Editor Unit Test", function() {'use strict';
    var $mockScope = null;
    var $mockDialog = null;
    var pc = null;

	beforeEach(function() {
	module('npcapp');
	});
	
    beforeEach(inject(function($rootScope, $controller) {
        $mockScope = $rootScope.$new();
        pc = $controller('NpcController', { $scope: $mockScope },{$dialog: $mockDialog}); 
    }));
    
    it('Test four fields', function(){
    	expect($mockScope.npcs.length).toEqual(4);
    });
    
    it('Test npcs field npcName type is string', function(){
    	expect(typeof ($mockScope.npcs[0].npcName)).toEqual('string');
    });
    
    it('Test npcs field hitPoints type is number', function(){
    	expect(typeof ($mockScope.npcs[0].hitPoints)).toEqual('number');
    });
    
    it('Test npcs field health type is number', function(){
    	expect(typeof ($mockScope.npcs[0].health)).toEqual('number');
    });
    
    it('Test npcs field totalMoves type is number', function(){
    	expect(typeof ($mockScope.npcs[0].totalMoves)).toEqual('number');
    });
    
    it('Test first record has default values set to Lucy', function(){
    	expect($mockScope.npcs[0].npcName).toEqual('Lucy');
    	expect($mockScope.npcs[0].hitPoints).toEqual(25);
    	expect($mockScope.npcs[0].health).toEqual(32);
    	expect($mockScope.npcs[0].totalMoves).toEqual(0);
    });
});