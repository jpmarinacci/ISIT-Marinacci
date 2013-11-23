/**
 * @author Charlie
 */

describe("npcapp", function() {'use strict';
    var $mockScope = null;
    var $mockDialog = null;
    var pc = null;

    beforeEach(inject(function($rootScope, $controller) {
        $mockScope = $rootScope.$new();
        pc = $controller('NpcController', { $scope: $mockScope },{$dialog: $mockDialog}); 
    }));
    
    it('Test Four Fields', function(){
    	expect($mockScope.npcs.length).toEqual(4);
    });
});

(function() {'use strict';
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var reporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(reporter);

    jasmineEnv.specFilter = function(spec) {
        return reporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function() {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

})();