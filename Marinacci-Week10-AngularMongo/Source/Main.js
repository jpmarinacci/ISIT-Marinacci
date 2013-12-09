 /**
 * @author Charlie Calvert
 */

 /* jshint devel: true */

angular.module('mainModule', ['mongoModule'])
.controller('mainController', function($scope, mongoData) { 'use strict';

	$scope.name = "mainController";
	
	$scope.presidentsLength = 0;
    $scope.userIndexSelection = 0;
    
    $scope.loadData = function() {
        $scope.presidents = mongoData.query({}, function(presidents) {
          $scope.presidentsLength = presidents.length;
          console.log($scope.presidentsLength);
          $scope.userIndexSelection = 0;      
          $('#indexSelection').val("0");
          $scope.indexChange();
        });
    };
    
    $scope.addPresident = function() {
        var pres = new mongoData({
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            address: $scope.address,
            city: $scope.city,
            state: $scope.state,
            zip: $scope.zip,
            phoneHome: $scope.phoneHome,
            phoneMobile: $scope.phoneMobile,
            email: $scope.email
        });
        pres.$save(function(president, r) {
            $scope.presidents.push(president);
            $scope.presidentsLength = $scope.presidents.length;
        });
    };
    
    $scope.deleteRow = function() {
        var userIndexSelection = $scope.userIndexSelection;
        // if (userIndexSelection < $scope.presidents.length) {}
        $scope.presidents[userIndexSelection].remove(function(deletedObject, headers) {
            $scope.presidents.splice(userIndexSelection, 1);
            $scope.presidentsLength = $scope.presidents.length;
        }, function(err) {
            console.log("error: " + err.data.message);  
        });
    };
    
    $scope.updateRow = function() {
        var indexOfItemToUpdate = $scope.userIndexSelection;
        $scope.presidents[indexOfItemToUpdate].firstName = $scope.firstName;
        $scope.presidents[indexOfItemToUpdate].lastName = $scope.lastName;
        $scope.presidents[indexOfItemToUpdate].address = $scope.address;
        $scope.presidents[indexOfItemToUpdate].city = $scope.city;
        $scope.presidents[indexOfItemToUpdate].state = $scope.state;
        $scope.presidents[indexOfItemToUpdate].zip = $scope.zip;
        $scope.presidents[indexOfItemToUpdate].phoneHome = $scope.phoneHome;
        $scope.presidents[indexOfItemToUpdate].phoneMobile = $scope.phoneMobile;
        $scope.presidents[indexOfItemToUpdate].email = $scope.email;
        $scope.presidents[indexOfItemToUpdate].updateMe(function(data) {            
            console.log("success: " + data);
        }, function(err) {
            console.log("Error Status: " + err.status + ' ' + err.data.message);
        });  
    };
    
    $scope.indexChange = function() {        
        $scope.firstName = $scope.presidents[$scope.userIndexSelection].firstName;
        $scope.lastName = $scope.presidents[$scope.userIndexSelection].lastName;
        $scope.address = $scope.presidents[$scope.userIndexSelection].address;
        $scope.city = $scope.presidents[$scope.userIndexSelection].city;
        $scope.state = $scope.presidents[$scope.userIndexSelection].state;
        $scope.zip = $scope.presidents[$scope.userIndexSelection].zip;
        $scope.phoneMobile = $scope.presidents[$scope.userIndexSelection].phoneMobile;
        $scope.phoneHome = $scope.presidents[$scope.userIndexSelection].phoneHome;
        $scope.email = $scope.presidents[$scope.userIndexSelection].email;
    };
});



