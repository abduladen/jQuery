// I demonstrate the use of adding multiple selections together with the add() function.  So, the jquery statement
// below will select all paragraph tags, and all span tags on the page and apply a css property to them.

$(document).ready(function() {

  $('p').add('span').css('background-color', 'red');

});
