/**
 * @author Charlie
 */
/**
 * @author Charlie
 */
angular.module('myCircleMod', [])
.factory('myCircleFactory', function() {'use strict';

    var MyCircle = (function() {
        
        function MyCircle() {
            
        }
        
        MyCircle.prototype.areaOfCircle = function(radius) {
            return Math.PI * radius*radius;
        };

        MyCircle.prototype.circumferenceOfCircle = function(radius) {
            return Math.PI * (radius*2);
        };
      
        return MyCircle; 
    })();
    
    return new MyCircle();
});
