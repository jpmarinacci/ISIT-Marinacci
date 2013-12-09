/**
 * @author JP
 */

var Panels = (function() {
	'use strict';
	
    function Panels() {
    	$('#bookPanel').hide();
        $('#musicPanel').show();
    }
    Panels.prototype.displayRadioButtonSelection = function() {
        var id = $("input[name=radioToggle]:checked").attr('id');
        if(id==='music') {
        	$('#bookPanel').hide();
        	$('#musicPanel').show();
        }
        else {
        	$('#musicPanel').hide();
        	$('#bookPanel').show();
        }
           
    };
    return Panels;
})();

$(document).ready(function() {
  "use strict";
  var panels = new Panels();  
  $("input[name=radioToggle]:radio").click(panels.displayRadioButtonSelection);
});
