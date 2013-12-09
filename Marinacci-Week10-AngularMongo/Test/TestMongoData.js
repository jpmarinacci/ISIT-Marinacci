/**
 * @author Charlie Calvert
 */


/**
 * @author Charlie
 */

describe("main controller test", function() {'use strict';
    var mainController = null;    
    var $httpBackend = null;
    
    beforeEach(function() {
        module("mainModule");
        module("mongoModule");
    });
    
    beforeEach(inject(function($rootScope, $controller) {        
        mainController = $rootScope.$new();
        $controller('mainController', { $scope: mainController }); 
    }));
    
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("Test main controller name", function() {
        expect(mainController.name).toEqual("mainController");
    });    
    
    it("can find tower hitpoints", function() {
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        .respond([
            {presidentName: "George Washington", termEnd: 1, termStart: 11},
            {presidentName: "John Adams", termEnd: 2, termStart: 22},
            {presidentName: "Thomas Jefferson", termEnd: 3, termStart: 33}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.presidents[0].presidentName).toEqual('George Washington');
    });
});


