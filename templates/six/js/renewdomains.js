"use strict";
jQuery(document).ready(function() {
   
    var renew  = jQuery('.renewals');

    if (!renew.length) {
        renew = jQuery('#tableRenewalsList'); 
    } 

    renew = renew.children()[1].children;
    
    for (var i = 0; i < renew.length;i++) {
        var cells = renew[i].cells;
        var years = computedYears(cells[3].children[0].innerText); 
        var type = cells[4].children[0];
        var lastChance = cells[3].children[2]; // if domain is expired but still we can renew (redemption period)
        if (lastChance && lastChance.className === 'text-danger') {
            years = 10;
        }
        if (type.nodeName === 'SELECT') {
            removeOptions(type,years);
            if (!type.length) {
                sanitizeForm(cells);
            }
        }
    }
});

var sanitizeForm= function(cell) {
    var website = "WEBSITE GOES HERE!!"; // Enter your website here!
     //for file cart.php?gid=renewals
    if (cell[0].baseURI === website+"cart.php?gid=renewals") {
        cell[0].children[0].disabled = true;
        cell[0].children[0].remove();
        cell[4].children[0].remove();
    }
    //for file clientarea.php?action=domains
    if (cell[0].baseURI === website+"clientarea.php?action=domains") {
       cell[5].children[0].remove();
       cell[4].children[0].remove();
    }
}

var computedYears  = function(years) {
    var daysIn10Years = 3650; //no leap years
    var computed = Math.floor((daysIn10Years - parseInt(years))/365);
    if (computed < 0 ) { computed = 0 }
    return computed;
}

var removeOptions = function (node,years) { 
    var length = node.length;    
    for (var i = 0;i<length;i++) {
        if (i > years-1) {
            node[years].remove();
        }
    }
}
