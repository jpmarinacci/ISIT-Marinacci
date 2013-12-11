/**
 * @author Charlie
 */
angular.module('circleMod', [])
.factory('circleFactory', function() {

    return {
        areaOfCircle : function(radius) {
            return Math.PI * radius*radius;
        },

        circumferenceOfCircle : function(radius) {
            return Math.PI * (radius*2);
        }
    };
});
