/**
 * @author JP
 */

angular.module('hydrantMod', [])
.factory('hydrant', function() {'use strict';
	console.log('hydrant factory called');
	return {
		hydrant : function() {
			return {
				health : 2,
				damage : 2
			};
		}
	};
}); 