/**
 * @author JP
 */

/* global angular:true */

angular.module('hydrantMod', [])
.factory('hydrant', function() {'use strict';
	//console.log('hydrant factory called');
	return {
		hydrant : function() {
			return {
				health : 9,
				damage : 2
			};
		}
	};
}); 